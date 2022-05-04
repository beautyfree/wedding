import type { FC } from "react";
import React from "react";

import { Cover } from "components/pages/home/Cover";
import { Invitation } from "components/pages/home/Invitation";

interface Props {}

export const Home: FC<Props> = (props) => {
  return (
    <div>
      <main>
        <Cover />
        <Invitation />
      </main>
    </div>
  );
};
