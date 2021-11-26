import Image from 'next/image';
import { BsThreeDotsVertical, BsFillChatLeftDotsFill } from 'react-icons/bs';
import {
  Container,
  IconsWrapper,
} from '../../styles/components/aside/header/styles';

export function Header() {
  return (
    <Container>
      <Image src="/profile.jpeg" alt="Gabriel Garcez" width={40} height={40} />
      <IconsWrapper>
        <BsFillChatLeftDotsFill />
        <BsThreeDotsVertical />
      </IconsWrapper>
    </Container>
  );
}
