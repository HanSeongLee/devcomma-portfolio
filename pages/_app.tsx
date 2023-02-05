import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </>
  );
}

export default MyApp
