import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { useEffect } from 'react';
import { Aside } from '../components/Aside';
import { Content } from '../components/Content';

import { withSSRAuth } from '../utils/withSSRAuth';

import { Container } from '../styles/pages/Chat/styles';
import { socket } from '../service/api';
import { useUser } from '../hooks/useUser';

type ChatProps = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

export default function Chat({ user }: ChatProps) {
  const { setUserProfile } = useUser();

  useEffect(() => {
    socket.emit('online', user.email, data => {
      setUserProfile(data);
    });
  }, []);

  return (
    <Container>
      <Aside />
      <Content />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async ctx => {
  const session = await getSession({ ctx });

  return {
    props: {
      user: session.user,
    },
  };
});
