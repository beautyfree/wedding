import type { FC } from "react";
import React from "react";
import { range } from "ramda";

import { styled } from "@linaria/react";
import { em } from "polished";
import { families, up } from "styles";
import classNames from "classnames";

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    position: absolute;
    top: 10px;
    right: -16px;
    z-index: -1;

    height: 100%;
    width: 60px;

    background: url("/images/invitation/Balloons.png") 50% no-repeat;
    background-size: 60px auto;

    content: "";
  }

  ${up.desktop} {
    &::before {
      display: none;
    }
  }
`;

const TitleText = styled.span`
  color: #497fa7;
  font-size: ${em("21px")};
  line-height: 1.1em;
  font-family: ${families.marck};
`;

const CalendarContent = styled.div`
  margin-top: ${em("5px")};

  width: ${em("164px")};
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${em("5px")};

  border-bottom: 1px dashed #cd1e27;
`;

const DayNameText = styled.div`
  flex: 1;

  color: #000;
  font-size: ${em("20px")};
  line-height: 1.2em;
  font-family: ${families.mistral};
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const DayNumberText = styled.div`
  flex: 1;

  color: #000;
  font-size: ${em("16px")};
  line-height: 1.2em;
  font-family: ${families.calibri};

  &.active {
    position: relative;

    color: #fff;

    &::before {
      position: absolute;
      top: -4px;
      left: -1px;
      height: 25px;
      width: 27px;
      z-index: -1;

      background: url("/images/invitation/Heart_calendar.png") no-repeat;
      background-size: 27px auto;

      transition: all 0.2s ease-in-out;

      content: "";

      ${up.desktop} {
        height: 33px;
        width: 35px;
        background-size: 35px auto;
      }
    }

    &:hover {
      &::before {
        transform: scale(1.1);
      }
    }
  }
`;

interface Props {}

export const Calendar: FC<Props> = (props) => {
  return (
    <Wrapper>
      <TitleText>Июнь 2022</TitleText>
      <CalendarContent>
        <Top>
          {["П", "В", "С", "Ч", "П", "С", "В"].map((day) => (
            <DayNameText key={day}>{day}</DayNameText>
          ))}
        </Top>
        <Row>
          {["", "", ...range(1, 6)].map((day) => (
            <DayNumberText key={day}>{day}</DayNumberText>
          ))}
        </Row>
        <Row>
          {range(6, 13).map((day) => (
            <DayNumberText key={day}>{day}</DayNumberText>
          ))}
        </Row>
        <Row>
          {range(13, 20).map((day) => (
            <DayNumberText key={day}>{day}</DayNumberText>
          ))}
        </Row>
        <Row>
          {range(20, 27).map((day) => (
            <DayNumberText
              key={day}
              className={classNames({ active: day === 24 })}
            >
              {day}
            </DayNumberText>
          ))}
        </Row>
        <Row>
          {[...range(27, 31), "", "", ""].map((day) => (
            <DayNumberText key={day}>{day}</DayNumberText>
          ))}
        </Row>
      </CalendarContent>
    </Wrapper>
  );
};
