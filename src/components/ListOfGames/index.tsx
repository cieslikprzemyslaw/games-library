import { DataWraper } from "./styles";
import { TGame } from "../../Types";
import SingleGame from "./SingleGame";
import { useGamesList } from "../../Hooks";

type ListOfGamesProps = {
  searchQuery: string;
  score: string;
  order: string;
}

const ListOfGames = (props: ListOfGamesProps) => {
  const gamesList: TGame[] = useGamesList();

  return (
    <DataWraper>
      {gamesList.filter(filterGames(props.searchQuery)).map(mapGameToComponent)}
    </DataWraper>
  );
};

const mapGameToComponent = (game: TGame) => <SingleGame key={game.id} {...game} />;
const filterGames = (searchQuery: string) => (game: TGame) => searchQuery.length > 0 ? game.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim()) : true;

export default ListOfGames;
