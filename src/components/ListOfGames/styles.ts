import styled from "styled-components";
import { respondTo } from "../../assests/GlobalStyles/respondTo";

export const DataWraper = styled.section`
  width: 100%;

  ${respondTo.lg`
  width: 50%;
  `}
`;

export const GameArticle = styled.article`
  border: black 1px solid;
  width: 100%;
  margin: 2vh auto;
  display: flex;
  flex-direction: column;
  position: relative;

  ${respondTo.md`
      flex-direction: row;
  `}
`;

export const Image = styled.section`
  height: 120px;
  width: 100%;
  background-color: #000;
  ${respondTo.md`
      width: 25%;
  `}
  ${respondTo.lg`
  height: 140px;
  `}
`;

export const Score = styled.section`
  color: white;
`;

export const TextWrapper = styled.section`
  width: 100%;
  height: 120px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  flex-direction: column;

  ${respondTo.md`
    width: 70%;
  `}
`;

export const Title = styled.h2``;

export const Paragraph = styled.p``;

export const Circle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #4bb5fc;
  top: 20px;
  right: 20px;
  font-size: 14px;
  font-weight: 900;

  ${respondTo.md`
      position: static;
      align-self: center;
      margin: 20px;
  `}
`;
