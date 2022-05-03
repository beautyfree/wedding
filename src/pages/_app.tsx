import "sanitize.css";

import type { AppProps } from "next/app";

export { global } from "styles";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
