import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  DataWraper,
  GameArticle,
  Image,
  Paragraph,
  Score,
  TextWrapper,
  Title,
} from "./styles";

// You might want to move this to a config or env variables.
const URL = "https://public.connectnow.org.uk/applicant-test/";

const ListOfGames = () => {
  const gamesList = useGamesList();

  return (
    <DataWraper>
      { gamesList.map(mapGameToComponent) }
    </DataWraper>
  );
};

/** A component representing only a single game entry. */
const SingleGame = (props: TGame) => {
  const summary = useMemo(() => (props.summary).split(" ").splice(0, 35).join(" "), [props.summary])

  return (
  <GameArticle key={props.id}>
    <Image></Image>

    <TextWrapper>
      <>
        <Title>{props.name}</Title>

        <Paragraph>{props.first_release_date}</Paragraph>
        <Paragraph>{summary}</Paragraph>
      </>
      <Score>{props.rate}</Score>
    </TextWrapper>
  </GameArticle>);
}

/** Simply takes a game object and returns a component representing the entry. */
const mapGameToComponent = (game: TGame) => <SingleGame {...game} />;

type TRawGame = {
  id: number;
  first_relase_date: number;
  name: string;
  rating: number;
  summary: string;
}

type TGame = {
  id: number;
  name: string;
  rate: number;
  summary: string;
  first_release_date: Date;
}

/**
 * Handles fetching and parsing of games.
 * Should be moved to a dedicated file!
 * @returns Games list.
 */
const useGamesList = () => {
  // You might want to initialy make the value null to indicate loading state.
  const [games, setGames] = useState([]);

  /** Parses the list and pushes the results to state. */
  const handleResponse = useCallback((raw_games: TRawGame[]) => {
    const _g = raw_games.map(parseGame)
    
    setGames(_g);
  }, [setGames]);

  /** Fetches the games list, converts received data to json. */
  const fetchGames = useCallback(() => {
    fetch(URL)
      .then(response => response.json())
      .then(handleResponse)
      .catch(console.error);
  }, []);

  /** Triggers the fetch once on initialization. You can propagate the fetchGames function from this hook if you need to refetch. */
  useEffect(() => {
    fetchGames();
  }, []);

  return games as TGame[];
}

/** Handles the whole parsing process for a single game entry. */
const parseGame = (raw_game: TRawGame): TGame => ({ ...raw_game, first_release_date: new Date(raw_game.first_relase_date), rate: Math.floor(raw_game.rating / 10) });

export default ListOfGames;
