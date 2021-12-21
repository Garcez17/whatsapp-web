import { useSelector } from 'react-redux';

import { State } from '../../store/modules/rootReducer';
import { User } from '../../store/modules/user/types';

import { Messages } from './Messages';
import { WppInfo } from './WppInfo';

import { Container } from '../../styles/components/content/styles';

export function Content() {
  const currentContact = useSelector<State, User>(
    state => state.contacts.currentContact,
  );

  return <Container>{currentContact ? <Messages /> : <WppInfo />}</Container>;
}
