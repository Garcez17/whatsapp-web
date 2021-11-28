import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { Aside } from '../components/Aside';
import { Content } from '../components/Content';

import { withSSRAuth } from '../utils/withSSRAuth';

import { Container } from '../styles/pages/Chat/styles';
import { socket } from '../service/api';

type ChatProps = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

export default function Chat({ user }: ChatProps) {
  return (
    <Container>
      <Aside user={user} />
      <Content />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async ctx => {
  const session = await getSession({ ctx });

  socket.emit('online', session.user.email);

  return {
    props: {
      user: session.user,
    },
  };
});
