import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoMdMic, IoMdSend } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { Formik, Form } from 'formik';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillEmojiLaughingFill, BsThreeDotsVertical } from 'react-icons/bs';
import Modal from 'react-modal';

import { IoArrowBackSharp } from 'react-icons/io5';
import { User } from '../../store/modules/user/types';
import { State } from '../../store/modules/rootReducer';
import { Message as MessageType } from '../../store/modules/chat/types';
import {
  updateContactLastMessage,
  updateContactNotifications,
  updateContactStatus,
} from '../../store/modules/contacts/actions';
import {
  addMessageToChat,
  updateUnreadMessages,
} from '../../store/modules/chat/actions';

import { Message } from './Message';
import { Input } from '../Input';

import { socket } from '../../service/api';

import {
  Container,
  HeaderMessages,
  Info,
  Text,
  IconsWrapper,
  Content,
  InputBar,
} from '../../styles/components/content/Messages/styles';
import { Contact } from '../../store/modules/contacts/types';
import { Group } from '../../store/modules/groups/types';
import {
  removeGroup,
  setCurrentGroup,
  updateGroupLastMessage,
} from '../../store/modules/groups/actions';

export function Messages() {
  const messagesEndRef = useRef(null);
  const dispatch = useDispatch();

  const user = useSelector<State, User>(state => state.user.user);
  const roomId = useSelector<State, string>(state => state.chat.roomId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentContact = useSelector<State, Contact>(
    state => state.contacts.currentContact,
  );

  const currentGroup = useSelector<State, Group>(
    state => state.groups.currentGroup,
  );

  const messages = useSelector<State, MessageType[]>(
    state => state.chat.messages,
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isBannedOrKicked = currentGroup?.idUsers.find(
    usr => usr._id === user._id,
  );

  useEffect(() => {
    socket.on('update_connection', data => {
      if (currentContact) {
        dispatch(updateContactStatus(data));
      }
    });

    if (roomId) {
      socket.on('message', data => {
        if (data.message.roomId === roomId) {
          if (currentContact || (currentGroup && isBannedOrKicked)) {
            dispatch(addMessageToChat(data.message));

            if (currentContact?._id !== data.message.to) {
              dispatch(
                updateContactLastMessage(currentContact?._id, data.message),
              );
            }

            if (currentGroup) {
              updateGroupLastMessage(currentGroup?._id, data.message);
            }
          }
        }
      });
    }

    socket.on('kicked_notification', res => {
      dispatch(removeGroup(res.roomId));
      dispatch(setCurrentGroup(null));
    });
    socket.on('banned_notification', res => {
      dispatch(removeGroup(res.roomId));
      dispatch(setCurrentGroup(null));
    });

    socket.on('updated_messages', data => {
      const lastMessage = data.updatedMessages.slice(-1)[0];

      dispatch(updateContactLastMessage(data.contact._id, lastMessage));

      dispatch(updateUnreadMessages(data.updatedMessages));
    });
  }, [socket, roomId]);

  const handleExitGroup = () => {
    socket.emit(
      'kick_user',
      {
        roomId: currentGroup.idChatRoom,
        userId: user._id,
        adminId: currentGroup.idAdmin,
        userSockedId: user.socket_id,
        exit: true,
      },
      res => {
        dispatch(removeGroup(res.roomId));
        dispatch(setCurrentGroup(null));
      },
    );
    handleCloseModal();
  };

  const handleSubmit = (message: string) => {
    const data = {
      message,
      roomId,
      user_id: user.id,
    };

    socket.emit('message', data);
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <Container>
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
          <h2 style={{ color: '#e9edef' }}>Deseja sair do grupo?</h2>
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
              onClick={handleExitGroup}
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
              Sair
            </button>
          </div>
        </div>
      </Modal>
      <HeaderMessages>
        <Info>
          {currentContact && (
            <Image
              src={currentContact.avatar}
              alt={currentContact.name}
              width={40}
              height={40}
            />
          )}
          <Text>
            {currentGroup ? (
              <>
                <span>{currentGroup.name}</span>
                <p>{currentGroup.idUsers.map(user => user.name).join(', ')}</p>
              </>
            ) : (
              <>
                <span>{currentContact.name}</span>
                {currentContact.is_online && <p>Online</p>}
              </>
            )}
          </Text>
        </Info>
        <IconsWrapper>
          <FiSearch />
          <BsThreeDotsVertical
            onClick={handleOpenModal}
            style={{ cursor: 'pointer' }}
          />
        </IconsWrapper>
      </HeaderMessages>
      <Content>
        {messages.map(msg => (
          <Message content={msg} key={msg._id} />
        ))}
        <div ref={messagesEndRef} />
      </Content>
      {isBannedOrKicked || !currentGroup ? (
        <InputBar>
          <BsFillEmojiLaughingFill />
          <AiOutlinePaperClip />
          <Formik
            initialValues={{ message: '' }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const message = values.message.trim();
              if (!message) {
                resetForm();
                return;
              }

              handleSubmit(message);
              resetForm();
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, values, handleChange, handleBlur }) => (
              <Form>
                <Input
                  placeholder="Type a message"
                  name="message"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                {values.message ? (
                  <button type="submit" disabled={isSubmitting}>
                    <IoMdSend />
                  </button>
                ) : (
                  <button type="button">
                    <IoMdMic />
                  </button>
                )}
              </Form>
            )}
          </Formik>
        </InputBar>
      ) : (
        <p>Você não esta mais nesse grupo</p>
      )}
    </Container>
  );
}
