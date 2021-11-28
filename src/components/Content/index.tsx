import { useChat } from '../../hooks/useChat';
import { Container } from '../../styles/components/content/styles';
import { Messages } from './Messages';
import { WppInfo } from './WppInfo';

export function Content() {
  const { user } = useChat();

  return <Container>{user ? <Messages /> : <WppInfo />}</Container>;
}
