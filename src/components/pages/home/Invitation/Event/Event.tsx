import type { FC } from "react";
import React from "react";

import { styled } from "@linaria/react";
import { em } from "polished";
import { families } from "styles";

const Wrapper = styled.div`
  max-width: ${em("285px")};
  padding: 10px;
  margin-top: ${em("71px")};

  color: #000;
  font-size: ${em("16px")};
  line-height: 1.1em;
  font-family: ${families.calibri};

  background: #fff;
  border: 2px dashed #b1186f;
  border-radius: 20px;
`;

interface Props {}

export const Event: FC<Props> = (props) => {
  return (
    <Wrapper>
      Если вы подготовили для нас сюрприз или творческий подарок, не забудьте
      предупредить нашего ведущего Владимира. Он поможет воплотить вашу идею или
      отговорит вас, и ответит на все вопросы.
    </Wrapper>
  );
};
