import type { FC } from "react";
import React from "react";

import { styled } from "@linaria/react";
import { em } from "polished";
import { up } from "styles";
import { Calendar } from "./Calendar";
import { Location } from "./Location";
import { Decision } from "./Decision";
import { Event } from "./Event";
import { Contacts } from "components/pages/home/Invitation/Contacts";
import { Message } from "./Message";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${em("83px")} 0 140px;

  text-align: center;

  background: url("/images/invitation/Garland_up_right.png") 100% 0 no-repeat;
  background-size: 110px auto;

  ${up.tablet} {
    font-size: 65%;
  }

  ${up.desktop} {
    background-size: 250px auto;
  }

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    width: 91px;
    background: url("/images/invitation/Flower_left_together.png") 0 0 no-repeat;
    background-size: 91px auto;

    ${up.desktop} {
      width: 201px;
      background: url("/images/invitation/Flower_up_left.png") 0 0 no-repeat;
      background-size: 201px auto;
    }

    content: "";
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    height: 233px;
    background: url("/images/common/Flower_left_cover.png") 0 100% no-repeat,
      url("/images/common/Flower_right_cover.png") 100% 100% no-repeat;
    background-size: 193px auto, 168px auto;

    ${up.desktop} {
      height: 510px;
      background: url("/images/common/Flower_left_cover.png") 0 100% no-repeat,
        url("/images/common/Flower_right_cover.png") 100% 100% no-repeat;
      background-size: 437px auto, 380px auto;
    }

    content: "";
  }
`;

const Columns = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: row;
  grid-gap: 12px;
  margin-top: ${em("40px")};

  ${up.desktop} {
    grid-auto-flow: column;
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr;
    min-height: 150px;

    background: url("/images/invitation/Balloons.png") 50% no-repeat;
    background-size: 77px auto;
  }
`;

interface Props {}

export const Invitation: FC<Props> = (props) => {
  return (
    <Wrapper>
      <Message />

      <Columns>
        <Calendar />
        <Location />
      </Columns>

      <Decision />
      <Event />
      <Contacts />
    </Wrapper>
  );
};
