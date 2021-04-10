import React from "react";
import useAsyncFetch from "../../../services/useAsyncFetch";
import {
  DataWraper,
  GameArticle,
  Image,
  Paragraph,
  Score,
  TextWrapper,
  Title,
} from "./styles";

const ListOfGames = () => {
  const url = "https://public.connectnow.org.uk/applicant-test/";

  const data: {
    id: number;
    first_relase_date: number;
    name: string;
    rating: number;
    summary: string;
  }[] = useAsyncFetch(url);



  return (
    <DataWraper>
      {data.map((game) => {
        const rate: number = Math.floor(game?.rating / 10);
        const date: any = game?.first_relase_date
        console.log(date)

        return (
          <GameArticle key={game.id}>
            <Image></Image>
            <TextWrapper>
              <Title>{game?.name}</Title>
              <Paragraph>{game?.first_relase_date}</Paragraph>
              <Paragraph>
                {(game?.summary).split(" ").splice(0, 35).join(" ")}
              </Paragraph>
              <Score>{rate}</Score>
            </TextWrapper>
          </GameArticle>
        );
      })}
    </DataWraper>
  );
};

export default ListOfGames;
