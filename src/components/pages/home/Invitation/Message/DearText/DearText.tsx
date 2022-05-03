import type { FC } from "react";
import React from "react";

import { styled } from "@linaria/react";
import { families, up } from "styles";
import { em } from "polished";

const Wrapper = styled.div`
  color: #6b95b6;
  font-size: ${em("28px")};
  line-height: 1.1em;
  font-family: ${families.marck};
`;

const AngelBoy = styled.span`
  position: absolute;

  display: inline-block;
  height: 42px;
  width: 57px;
  top: calc(22px - 42px);
  left: calc(-15px - 57px);

  background: url("/images/invitation/Cupid_boy.png") 0 0 no-repeat;
  background-size: 57px auto;

  ${up.desktop} {
    height: 54px;
    width: 74px;
    top: calc(27px - 54px);
    left: calc(-15px - 74px);

    background-size: 74px auto;
  }
`;

const AngelGirl = styled.span`
  position: absolute;

  display: inline-block;
  height: 33px;
  width: 38px;
  right: calc(-20px - 38px);
  bottom: 3px;

  background: url("/images/invitation/Cupid_girl.png") 0 0 no-repeat;
  background-size: 38px auto;

  ${up.desktop} {
    height: 42px;
    width: 50px;
    right: calc(-20px - 50px);

    background-size: 50px auto;
  }
`;

interface Props {
  text: string;
}

export const DearText: FC<Props> = ({ text }) => {
  const words = text.split(" ");
  return (
    <Wrapper>
      {words.map((word, i) => {
        if (i === 0) {
          return (
            <span key={word} style={{ position: "relative" }}>
              <AngelBoy />
              <span dangerouslySetInnerHTML={{ __html: word }} />{" "}
            </span>
          );
        }

        if (i === words.length - 1) {
          return (
            <span key={word} style={{ position: "relative" }}>
              <span dangerouslySetInnerHTML={{ __html: word }} />
              <AngelGirl />
            </span>
          );
        }

        return (
          <>
            <span key={word} dangerouslySetInnerHTML={{ __html: word }} />{" "}
          </>
        );
      })}
    </Wrapper>
  );
};
