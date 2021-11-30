import { useChat } from '../../hooks/useChat';
import { Container } from '../../styles/components/content/styles';
import { Messages } from './Messages';
import { WppInfo } from './WppInfo';

export function Content() {
  const { currentUserChat } = useChat();

  return <Container>{currentUserChat ? <Messages /> : <WppInfo />}</Container>;
}
