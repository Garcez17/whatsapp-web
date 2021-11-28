import Image from 'next/image';
import { BsThreeDotsVertical, BsFillChatLeftDotsFill } from 'react-icons/bs';
import {
  Container,
  IconsWrapper,
} from '../../styles/components/aside/header/styles';

type HeaderProps = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

export function Header({ user }: HeaderProps) {
  return (
    <Container>
      <Image src={user.image} alt={user.name} width={40} height={40} />
      <IconsWrapper>
        <BsFillChatLeftDotsFill />
        <BsThreeDotsVertical />
      </IconsWrapper>
    </Container>
  );
}
