import type { FC } from "react";
import React from "react";

import { styled } from "@linaria/react";
import { em } from "polished";
import { down, families, up } from "styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${em("50px")};
`;

const HintText = styled.div`
  max-width: ${em("292px")};

  color: #000;
  font-size: ${em("15px")};
  line-height: 1.1em;
  font-family: ${families.calibri};
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${em("18px")};
  margin: ${em("15px")} 0 ${em("25px")};
`;

const ButtonA = styled.a`
  position: relative;
  z-index: 1;

  padding: 12px 35px;

  color: #fff;
  font-size: ${em("17px")};
  line-height: 1em;
  font-family: ${families.calibri};
  white-space: nowrap;

  background: linear-gradient(
    274.49deg,
    #0c9ff5 0%,
    #ba4db4 59.35%,
    #fe518d 99.33%
  );
  border: none;
  border-radius: 24px;

  appearance: none;
  user-select: none;
  cursor: pointer;

  &::before {
    position: absolute;
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    z-index: -1;

    background: linear-gradient(
      274.49deg,
      #0c9ff5 0%,
      #ba4db4 59.35%,
      #fe518d 99.33%
    );
    border-radius: 24px;

    transition: all 0.2s ease-in-out;
    opacity: 0;

    content: "";
  }

  &:hover {
    &::before {
      opacity: 0.5;
    }
  }

  &.negative {
    background: #b71616;
    opacity: 0.23;

    &:hover {
      &::before {
        background: #b71616;
      }
    }
  }
`;

const TelegramText = styled.span`
  max-width: ${em("250px")};

  color: #000;
  font-size: ${em("16px")};
  line-height: 1.1em;
  font-family: ${families.calibri};
`;

interface Props {}

export const Decision: FC<Props> = (props) => {
  return (
    <Wrapper>
      <HintText>
        Будем очень признательны, если вы ответите на приглашение <br /> до 1
        июня 2022 года.
      </HintText>
      <ButtonsWrapper>
        <ButtonA
          href="https://docs.google.com/forms/d/1Y3vOn5dPfbWnEuoevGkDOr7_rZme0IAl8zy8bn_-skc"
          target="_blank"
          rel="noreferrer"
        >
          Я пойду
        </ButtonA>
        <ButtonA
          href="https://docs.google.com/forms/d/1SvpQtxr1sDtp6QpxqR0EQs7Iqfvp_-Y_kDDgDvJ-sOk"
          target="_blank"
          rel="noreferrer"
          className="negative"
        >
          Не пойду
        </ButtonA>
      </ButtonsWrapper>
      <TelegramText>
        Мы будем публиковать актуальную информацию в специальном telegram
        канале: <br />
        <a href="https://t.me/wedding_aa" target="_blank" rel="noreferrer">
          @wedding_aa
        </a>
      </TelegramText>
    </Wrapper>
  );
};
