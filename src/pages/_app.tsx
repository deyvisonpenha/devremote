import type { AppProps } from 'next/app';

import { GlobalStyle } from '@global-styles';
import { ThemeContextProvider } from '@context-theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider >
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeContextProvider>
)}

export default MyApp
