import '../styles/globals.css'
import type { AppProps } from 'next/app';
import  wrapper  from "../store/configStore";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// wrapper로 app을 감싸준다.
export default wrapper.withRedux(MyApp)
