import Image from 'next/image';
import { BsThreeDotsVertical, BsFillChatLeftDotsFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { State } from '../../store/modules/rootReducer';
import { UserState } from '../../store/modules/user/types';

import {
  Container,
  IconsWrapper,
} from '../../styles/components/aside/header/styles';

export function Header() {
  const { user } = useSelector<State, UserState>(state => state.user);

  return (
    <Container>
      {user && (
        <Image src={user.avatar} alt={user.name} width={40} height={40} />
      )}
      <IconsWrapper>
        <BsFillChatLeftDotsFill />
        <BsThreeDotsVertical />
      </IconsWrapper>
    </Container>
  );
}
