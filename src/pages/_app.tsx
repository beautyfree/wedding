import "sanitize.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export { global } from "styles";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Приглашение на свадьбу 💍 24.06.22</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
