import Image from 'next/image';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';
import { AiFillGithub } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

import { withSSRGuest } from '../utils/withSSRGuest';

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
  const router = useRouter();

  async function handleSingIn() {
    await signIn('github');

    router.push('/chat');
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
          </Info>
          <ButtonsContainer>
            <Button color="var(--black)" onClick={handleSingIn}>
              <AiFillGithub />
              Sign in with Github
            </Button>
          </ButtonsContainer>
        </Content>
      </Wrapper>
    </Container>
  );
}

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
