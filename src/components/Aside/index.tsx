import { useUser } from '../../hooks/useUser';
import { Container } from '../../styles/components/aside/styles';
import { Chats } from './Chats';
import { Header } from './Header';
import { Notification } from './Notification';
import { SearchBar } from './SearchBar';

export function Aside() {
  const { user } = useUser();

  return (
    <Container>
      <Header />
      <Notification />
      <SearchBar />
      {user && <Chats />}
    </Container>
  );
}
