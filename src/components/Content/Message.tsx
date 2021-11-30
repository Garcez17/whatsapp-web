import { BsCheck2All } from 'react-icons/bs';
import { Container } from '../../styles/components/content/Message/styles';

type MessageProps = {
  userMessage?: boolean;
  content: any;
};

export function Message({ content, userMessage = false }: MessageProps) {
  return (
    <Container userMessage={userMessage}>
      {!userMessage && <span>Lucas</span>}
      <p>
        {content.text} <span>21:56 {userMessage && <BsCheck2All />}</span>
      </p>
    </Container>
  );
}
