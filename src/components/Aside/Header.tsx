import Image from 'next/image';
import { BsThreeDotsVertical, BsFillChatLeftDotsFill } from 'react-icons/bs';
import { useUser } from '../../hooks/useUser';

import {
  Container,
  IconsWrapper,
} from '../../styles/components/aside/header/styles';

export function Header() {
  const { user } = useUser();

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
