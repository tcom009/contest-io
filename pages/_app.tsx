import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
