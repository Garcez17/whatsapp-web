import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { socket } from '../../service/api';
import {
  loadMessagesFromChat,
  setRoomId,
} from '../../store/modules/chat/actions';
import { setCurrentContact } from '../../store/modules/contacts/actions';
import { User } from '../../store/modules/user/types';
import {
  Container,
  ChatContent,
  MessageCounter,
  TimeAndMessages,
  TitleAndMessage,
} from '../../styles/components/aside/chat/styles';

type ChatProps = {
  user: User;
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
