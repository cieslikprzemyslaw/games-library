import { useCallback, useEffect, useState } from "react";
import { TGame, TRawGame } from "./Types";

const URL = "https://public.connectnow.org.uk/applicant-test/";

export const useGamesList = () => {
  const [games, setGames] = useState<TGame[]>([]);

  const handleResponse = useCallback(
    (raw_games: TRawGame[]) => {
      const _g = raw_games.map(parseGame);

      setGames(_g);
    },
    [setGames]
  );

  const fetchGames = useCallback(() => {
    fetch(URL)
      .then((response) => response.json())
      .then(handleResponse)
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetchGames();
  }, []);

  return games as TGame[];
};

const parseGame = (raw_game: TRawGame): TGame => ({
  ...raw_game,
  first_release_date: new Date(raw_game.first_relase_date),
  rate: Math.floor(raw_game.rating / 10),
});
