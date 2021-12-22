import { BsCheck2All } from 'react-icons/bs';
import { Message } from '../../store/modules/chat/types';

import { Container } from '../../styles/components/content/Message/styles';

type MessageProps = {
  userMessage: boolean;
  content: Message;
};

export function Message({ content, userMessage }: MessageProps) {
  return (
    <Container userMessage={userMessage}>
      <p>
        {content.text} <span>21:56 {userMessage && <BsCheck2All />}</span>
      </p>
    </Container>
  );
}
