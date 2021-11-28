import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { socket } from '../../../service/api';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIEND_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user',
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const { email, image, name } = user;

      socket.emit('start', {
        email,
        avatar: image,
        name,
      });

      return true;
    },
  },
});
