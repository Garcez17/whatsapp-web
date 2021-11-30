import Image from 'next/image';
import { useEffect } from 'react';
import { User } from '../../contexts/ChatContext';
import { Message } from '../../contexts/RoomContext';
import { useChat } from '../../hooks/useChat';
import { useRoom } from '../../hooks/useRoom';
import { socket } from '../../service/api';
import {
  Container,
  ChatContent,
  MessageCounter,
  TimeAndMessages,
  TitleAndMessage,
} from '../../styles/components/aside/chat/styles';

export function Chat({ user }: any) {
  const { loadUser } = useChat();
  const { loadMessages, insertRoomId, messages } = useRoom();

  function handleOpenChat(usr: User) {
    loadUser(usr);

    socket.emit('start_chat', { idUser: user._id }, response => {
      const { room, messages: msgs } = response;

      insertRoomId(room.idChatRoom);

      loadMessages(msgs);
    });
  }

  return (
    <Container onClick={() => handleOpenChat(user)}>
      <Image src={user.avatar} alt="Gabriel Garcez" width={50} height={50} />
      <ChatContent>
        <TitleAndMessage>
          <span>{user.name}</span>
          <p>vsf corno fudido kkkkkkkkkj</p>
        </TitleAndMessage>
        <TimeAndMessages hasMessage>
          <span>21:08</span>
          <MessageCounter>
            <span>86</span>
          </MessageCounter>
        </TimeAndMessages>
      </ChatContent>
    </Container>
  );
}
