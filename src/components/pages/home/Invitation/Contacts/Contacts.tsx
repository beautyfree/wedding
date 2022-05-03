import type { FC } from "react";
import React from "react";

import { styled } from "@linaria/react";
import { em } from "polished";
import { families, up } from "styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${em("20px")};
`;

const Text = styled.span`
  color: #000;
  font-size: ${em("16px")};
  line-height: 1.1em;
  font-family: ${families.calibri};
`;

const Mobile = styled.div`
  display: block;

  ${up.tablet} {
    display: inline;
  }
`;

interface Props {}

export const Contacts: FC<Props> = (props) => {
  return (
    <Wrapper>
      <Text>Контакты</Text>
      <Text>
        Тел. ведущего (Владимир):{" "}
        <Mobile>
          <a href="tel:+7-905-660-40-04">8-905-660-40-04</a>
        </Mobile>
      </Text>
      <Text>
        Тел. жениха: <a href="tel:+7-915-218-18-61">8-915-218-18-61</a>
      </Text>
      <Text>
        Тел. невесты: <a href="tel:+7-915-230-75-08">8-915-230-75-08</a>
      </Text>
    </Wrapper>
  );
};
