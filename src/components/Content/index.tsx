import { useSelector } from 'react-redux';

import { State } from '../../store/modules/rootReducer';
import { User } from '../../store/modules/user/types';

import { Messages } from './Messages';
import { WppInfo } from './WppInfo';

import { Container } from '../../styles/components/content/styles';
import { Group } from '../../store/modules/groups/types';

export function Content() {
  const currentContact = useSelector<State, User>(
    state => state.contacts.currentContact,
  );

  const currentGroup = useSelector<State, Group>(
    state => state.groups.currentGroup,
  );

  return (
    <Container>
      {currentContact || currentGroup ? <Messages /> : <WppInfo />}
    </Container>
  );
}
