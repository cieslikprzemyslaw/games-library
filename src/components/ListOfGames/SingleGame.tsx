import React, { useMemo } from "react";
import { TGame } from "../../Types";
import { GameArticle, Image, TextWrapper, Title, Paragraph, Score } from "./styles";

const SingleGame = (props: TGame) => {
  const summary = useMemo(
    () => props.summary.split(" ").splice(0, 35).join(" "),
    [props.summary]
  );

  return (
    <GameArticle key={props.id}>
      <Image></Image>

      <TextWrapper>
        <>
          <Title>{props.name}</Title>

          <Paragraph>{props.first_release_date.toString()}</Paragraph>
          <Paragraph>{summary}</Paragraph>
        </>
        <Score>{props.rate}</Score>
      </TextWrapper>
    </GameArticle>
  );
};

export default SingleGame;