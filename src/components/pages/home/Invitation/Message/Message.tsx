import type { FC } from "react";
import React from "react";

import { styled } from "@linaria/react";
import { em } from "polished";
import { families, up } from "styles";
import { DearText } from "./DearText";
import { useRouter } from "next/router";
import { invites } from "data/invites";
import { useInvite } from "hooks/useInvite";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HappyText = styled.span`
  max-width: 258px;
  margin-top: ${em("20px")};

  color: #000;
  font-size: ${em("16px")};
  line-height: 1.1em;
  font-family: ${families.calibri};

  word-wrap: break-word;

  ${up.tablet} {
    max-width: 331px;
  }
`;

const Delimiter = styled.div`
  margin-top: ${em("21px")};

  height: ${em("10px")};
  width: ${em("42px")};

  background: url("/images/invitation/Arrow_heart.png") 0 no-repeat;
  background-size: ${em("42px")} auto;
`;

export const Message: FC = () => {
  const invite = useInvite();

  return (
    <Wrapper>
      <DearText text={invite?.message ?? "Дорогие гости"} />
      <HappyText>
        Мы будем рады разделить с {invite?.single ? "тобой" : "вами"} радость
        неповторимого для нас дня — дня нашей свадьбы! Приглашаем присоединиться
        <br /> к нашему празднику :)
      </HappyText>
      <Delimiter />
    </Wrapper>
  );
};
