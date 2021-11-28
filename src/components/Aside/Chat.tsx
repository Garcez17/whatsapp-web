import Image from 'next/image';
import { User } from '../../contexts/ChatContext';
import { useChat } from '../../hooks/useChat';
import {
  Container,
  ChatContent,
  MessageCounter,
  TimeAndMessages,
  TitleAndMessage,
} from '../../styles/components/aside/chat/styles';

export function Chat({ user }: any) {
  const { loadUser } = useChat();

  function handleOpenChat(usr: User) {
    loadUser(usr);
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
