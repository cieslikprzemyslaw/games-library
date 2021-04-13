import { DataWraper } from "./styles";
import { TGame } from "../../Types";
import SingleGame from "./SingleGame";
import { useGamesList } from "../../Hooks";

const ListOfGames = () => {
  const gamesList: TGame[] = useGamesList();

  return <DataWraper>{gamesList.map(mapGameToComponent)}</DataWraper>;
};

const mapGameToComponent = (game: TGame) => <SingleGame key={game.id} {...game} />;

export default ListOfGames;
