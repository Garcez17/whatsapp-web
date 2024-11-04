import { format } from 'date-fns';
import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import Image from 'next/image';
import { IoArrowBackSharp } from 'react-icons/io5';
import { Message as MessageType } from '../../store/modules/chat/types';
import { State } from '../../store/modules/rootReducer';
import { User } from '../../store/modules/user/types';
import { CheckIcon } from '../../styles/components/aside/chat/styles';

import {
  Container,
  MsgWrapper,
} from '../../styles/components/content/Message/styles';
import { Group } from '../../store/modules/groups/types';
import { socket } from '../../service/api';

type MessageProps = {
  content: MessageType;
};

function MessageComponent({ content }: MessageProps) {
  const user = useSelector<State, User>(state => state.user.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentGroup = useSelector<State, Group>(
    state => state.groups.currentGroup,
  );

  const handleOpenModal = () => {
    const isAdmin = currentGroup?.idAdmin === user._id;

    if (isAdmin) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBanUser = () => {
    socket.emit('ban_user', {
      roomId: currentGroup.idChatRoom,
      userId: content.to._id,
      adminId: user._id,
    });
    handleCloseModal();
  };

  const handleRemoveUser = () => {
    socket.emit('kick_user', {
      roomId: currentGroup.idChatRoom,
      userId: content.to._id,
      adminId: user._id,
      userSockedId: user.socket_id,
    });
    handleCloseModal();
  };

  const sender = (
    content.to._id ? content.to._id : (content.to as unknown)
  ) as string;

  const hour = useMemo(() => {
    return format(new Date(content.created_at), 'HH:mm');
  }, [content.created_at]);

  return (
    <Container userMessage={user._id === sender} onClick={handleOpenModal}>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Options Modal"
        style={{
          content: {
            backgroundColor: '#2a2f32',
            width: '500px',
            height: 'fit-content',
            margin: 'auto',
            borderRadius: '8px',
            padding: '20px',
            border: 'none',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <button
            type="button"
            onClick={handleCloseModal}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#e9edef',
              marginRight: '10px',
            }}
          >
            <IoArrowBackSharp size={24} />
          </button>
          <h2 style={{ color: '#e9edef' }}>
            Deseja remover/banir do grupo {content?.to?.name}?
          </h2>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}
        >
          <button
            type="button"
            onClick={handleCloseModal}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#00a884',
              fontWeight: 'bold',
            }}
          >
            Cancelar
          </button>
          <div>
            <button
              type="button"
              onClick={handleRemoveUser}
              style={{
                backgroundColor: '#00a884',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Expulsar
            </button>
            <button
              type="button"
              onClick={handleBanUser}
              style={{
                backgroundColor: '#00a884',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                marginLeft: '10px',
              }}
            >
              Banir
            </button>
          </div>
        </div>
      </Modal>
      {user._id !== sender && currentGroup?._id && (
        <Image
          src={content?.to?.avatar}
          alt={content?.to?.name}
          width={48}
          height={48}
        />
      )}
      <MsgWrapper userMessage={user._id === sender}>
        {user._id !== sender && currentGroup?._id && (
          <span>{content?.to?.name}</span>
        )}
        <p>
          {content.text}{' '}
          <span>
            {hour} {user._id === sender && <CheckIcon isRead={content.read} />}
          </span>
        </p>
      </MsgWrapper>
    </Container>
  );
}

export const Message = memo(MessageComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.content, nextProps.content);
});
