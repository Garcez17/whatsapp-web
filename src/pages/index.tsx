import Image from 'next/image';
import { signIn } from 'next-auth/client';

import { AiFillGithub } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

import {
  Container,
  Header,
  LogoContainer,
  Wrapper,
  Content,
  Info,
  ButtonsContainer,
  Button,
} from '../styles/pages/Home/styles';

export default function Home() {
  // const router = useRouter();

  async function handleSingIn() {
    await signIn('github');
  }

  return (
    <Container>
      <Header>
        <LogoContainer>
          <Image src="/wpp_logo.png" alt="WhatsApp" width={36} height={36} />
          <span>WHATSAPP WEB</span>
        </LogoContainer>
      </Header>
      <Wrapper>
        <Content>
          <Info>
            <h1>To use WhatsApp on your computer:</h1>
            <p>
              1. Login social pq a API do WhatsApp é cara pra krl e o jeff bezos
              já comeu minha carteira
            </p>
          </Info>
          <ButtonsContainer>
            <Button color="var(--white-100)">
              <Image
                src="/google_logo.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
              Sign in with Google
            </Button>
            <Button color="var(--black)" onClick={handleSingIn}>
              <AiFillGithub />
              Sign in with Github
            </Button>
            <Button color="linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);">
              <BsInstagram />
              Sign in with Instagram
            </Button>
            <Button color="#738ABD">
              <FaDiscord />
              Sign in with Discord
            </Button>
          </ButtonsContainer>
        </Content>
      </Wrapper>
    </Container>
  );
}
