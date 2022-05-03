import type { FC } from "react";
import React from "react";

import { styled } from "@linaria/react";
import { em } from "polished";
import { families, up } from "styles";

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  text-align: center;

  background: url("/images/cover/Background_down_left.png") 0 100% no-repeat,
    url("/images/cover/Background_up_right.png") 100% 0 no-repeat;
  background-size: contain;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: url("/images/common/Flower_left_cover.png") 0 100% no-repeat,
      url("/images/common/Flower_right_cover.png") 100% 100% no-repeat;
    background-size: 193px auto, 168px auto;

    content: "";

    ${up.desktop} {
      background-size: contain;
    }
  }
`;

const InviteWrapper = styled.div``;

const InviteText = styled.span`
  color: #947241;
  font-size: ${em("52px")};
  line-height: 1.1em;
  font-family: ${families.marck};

  &.padding {
    margin-left: ${em("6px")};
  }
`;

const NamesText = styled.span`
  margin-top: ${em("20px")};

  color: #595860;
  font-size: ${em("15px")};
  line-height: 1.1em;
  font-family: ${families.segoe};
`;

const DateText = styled.span`
  margin-top: ${em("13px")};

  color: #595860;
  font-size: ${em("20px")};
  line-height: 1.1em;
  font-family: ${families.chiller};
`;

interface Props {}

export const Cover: FC<Props> = (props) => {
  return (
    <Wrapper>
      <InviteWrapper>
        <InviteText>Приглашение</InviteText>
        <br />
        <InviteText>на</InviteText>
        <InviteText className="padding">свадьбу</InviteText>
      </InviteWrapper>
      <NamesText>Алексей + Александра</NamesText>
      <DateText>24.06.2022</DateText>
    </Wrapper>
  );
};
