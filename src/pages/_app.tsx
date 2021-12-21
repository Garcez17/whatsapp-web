import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { AppProvider } from '../contexts';
import { store } from '../store';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppProvider session={pageProps.session}>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppProvider>
    </Provider>
  );
}

export default MyApp;
