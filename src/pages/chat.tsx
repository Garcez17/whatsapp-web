import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../store/modules/user/actions';

import { socket } from '../service/api';
import { withSSRAuth } from '../utils/withSSRAuth';

import { Aside } from '../components/Aside';
import { Content } from '../components/Content';

import { Container } from '../styles/pages/Chat/styles';

type ChatProps = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

export default function Chat({ user }: ChatProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit('online', user.email, data => {
      dispatch(loginUser(data));
    });
  }, [dispatch, user.email]);

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
