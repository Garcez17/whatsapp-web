import { useSelector } from 'react-redux';

import { State } from '../../store/modules/rootReducer';
import { UserState } from '../../store/modules/user/types';

import { Chats } from './Chats';
import { Header } from './Header';
import { Notification } from './Notification';
import { SearchBar } from './SearchBar';

import { Container } from '../../styles/components/aside/styles';

export function Aside() {
  const { user } = useSelector<State, UserState>(state => state.user);

  return (
    <Container>
      <Header />
      <Notification />
      <SearchBar />
      {user && <Chats />}
    </Container>
  );
}
