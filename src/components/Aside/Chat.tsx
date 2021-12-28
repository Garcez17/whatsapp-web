import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BsCheck2All } from 'react-icons/bs';

import {
  loadMessagesFromChat,
  setRoomId,
} from '../../store/modules/chat/actions';
import {
  setCurrentContact,
  updateContactLastMessage,
  updateContactNotifications,
} from '../../store/modules/contacts/actions';
import { Contact } from '../../store/modules/contacts/types';
import { User } from '../../store/modules/user/types';

import { socket } from '../../service/api';

import {
  Container,
  ChatContent,
  MessageCounter,
  TimeAndMessages,
  TitleAndMessage,
  CheckIcon,
} from '../../styles/components/aside/chat/styles';

type ChatProps = {
  user: Contact;
};

export function Chat({ user }: ChatProps) {
  const dispatch = useDispatch();

  function handleOpenChat(usr: User) {
    dispatch(setCurrentContact(usr));

    socket.emit('start_chat', { idUser: user._id }, response => {
      const { roomId, messages } = response;

      dispatch(setRoomId(roomId));

      dispatch(loadMessagesFromChat(messages));
    });
  }

  useEffect(() => {
    socket.on('notification', data => {
      if (user._id === data.from._id) {
        dispatch(updateContactNotifications(user, data.unreadMessages));
        dispatch(updateContactLastMessage(user, data.lastMessage));
      }
    });
  }, [socket]);

  return (
    <Container onClick={() => handleOpenChat(user)}>
      <Image src={user.avatar} alt={user.name} width={50} height={50} />
      <ChatContent>
        <TitleAndMessage>
          <span>{user.name}</span>
          <div>
            {user.lastMessage?.text && (
              <>
                {String(user.lastMessage.to) !== user._id && (
                  <CheckIcon isRead={user.lastMessage.read} />
                )}

                <p>{user.lastMessage.text}</p>
              </>
            )}
          </div>
        </TitleAndMessage>
        <TimeAndMessages hasMessage={!!user.unreadMessages}>
          {user.lastMessage?.text && <span>21:08</span>}

          {user.unreadMessages > 0 && (
            <MessageCounter>
              <span>{user.unreadMessages}</span>
            </MessageCounter>
          )}
        </TimeAndMessages>
      </ChatContent>
    </Container>
  );
}
