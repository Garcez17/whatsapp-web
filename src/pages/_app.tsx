import { AppProps } from 'next/app';

import { socket } from '../service/api';

import GlobalStyle from '../styles/global';

// socket.on('connect', () =>
//   console.log('[IO] Connect => A new connection has been established'),
// );

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
