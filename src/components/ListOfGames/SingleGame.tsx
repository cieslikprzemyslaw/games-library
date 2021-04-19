import React, { useMemo } from "react";
import { TGame } from "../../Types";
import {
  GameArticle,
  Image,
  TextWrapper,
  Title,
  Paragraph,
  Score,
  Circle,
  TitleWrapper,
} from "./styles";

const SingleGame = (props: TGame) => {
  const summary = useMemo(
    () => props.summary.split(" ").splice(0, 35).join(" "),
    [props.summary]
  );

  return (
    <GameArticle key={props.id}>
      <Image></Image>

      <TextWrapper>
        <TitleWrapper>
          <Title>{props.name}</Title>
        </TitleWrapper>
        <Paragraph>{summary}</Paragraph>
      </TextWrapper>
      <Circle>
        <Score>{props.rate}</Score>
      </Circle>
    </GameArticle>
  );
};

export default SingleGame;
