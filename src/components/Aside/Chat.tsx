import Image from 'next/image';
import {
  Container,
  ChatContent,
  MessageCounter,
  TimeAndMessages,
  TitleAndMessage,
} from '../../styles/components/aside/chat/styles';

export function Chat() {
  return (
    <Container>
      <Image src="/profile.jpeg" alt="Gabriel Garcez" width={50} height={50} />
      <ChatContent>
        <TitleAndMessage>
          <span>Gabriel Garcez</span>
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
