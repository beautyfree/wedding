import type { FC } from "react";
import React from "react";

import { styled } from "@linaria/react";
import { em } from "polished";
import { families } from "styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${em("305px")};
`;

const TimeText = styled.span`
  color: #497fa7;
  font-size: ${em("24px")};
  line-height: 1.1em;
  font-family: ${families.marck};
`;

const LocationText = styled.span`
  margin-top: 20px;

  color: #000;
  font-size: ${em("16px")};
  line-height: 1.1em;
  font-family: ${families.calibri};
`;

interface Props {}

export const Location: FC<Props> = (props) => {
  return (
    <Wrapper>
      <TimeText>Время сбора 15:30</TimeText>
      <LocationText>
        Нижний Новгород, Яхт-клуб Лето, Набережная Гребного канала, 109с1
        <br /> (
        <a
          href="https://yandex.ru/maps/org/shatyor_yakht_klub_leto/102176996900/?ll=44.052713%2C56.329807&mode=search&sll=44.052713%2C56.329807&sspn=0.079908%2C0.047398&text=%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9%20%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%2C%20%D0%AF%D1%85%D1%82-%D0%BA%D0%BB%D1%83%D0%B1%20%D0%9B%D0%B5%D1%82%D0%BE%2C%20%D0%9D%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F%20%D0%93%D1%80%D0%B5%D0%B1%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0%2C%20109%D1%811&z=14"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          карта
        </a>
        )
      </LocationText>
    </Wrapper>
  );
};
