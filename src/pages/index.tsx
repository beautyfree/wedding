import type { NextPage } from "next";
// import Image from "next/image";

import { Cover } from "components/pages/home/Cover";
import { Invitation } from "components/pages/home/Invitation/Invitation";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Cover />
        <Invitation />
      </main>

      {/*<footer>*/}
      {/*  <a*/}
      {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Powered by{" "}*/}
      {/*    <span>*/}
      {/*      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
      {/*    </span>*/}
      {/*  </a>*/}
      {/*</footer>*/}
    </div>
  );
};

export default Home;