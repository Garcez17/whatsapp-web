import { Container } from '../../styles/components/aside/styles';
import { Chats } from './Chats';
import { Header } from './Header';
import { Notification } from './Notification';
import { SearchBar } from './SearchBar';

type AsideProps = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

export function Aside({ user }: AsideProps) {
  return (
    <Container>
      <Header user={user} />
      <Notification />
      <SearchBar />
      <Chats />
    </Container>
  );
}
