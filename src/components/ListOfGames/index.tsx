import { DataWraper } from "./styles";
import { TGame } from "../../Types";
import SingleGame from "./SingleGame";
import { useGamesList } from "../../Hooks";
import { usePagination } from "./usePagination";
import { useMemo } from "react";

type ListOfGamesProps = {
  searchQuery: string;
  volume: number;
  order: "name" | "rate";
  sortDescending: boolean;
};

// const array = [2, 4, 6, 7, 9, 22, 44, 55, 33, 22, 88];

const ListOfGames = (props: ListOfGamesProps) => {
  const gamesList: TGame[] = useGamesList();
  const pagination = usePagination(gamesList, props.volume);

  /** Order data by name or rate. */
  const sortedData = useMemo(() => {
    if (!props.order) return pagination.data;

    return pagination.data.sort(
      sortByNameOrRate(!props.sortDescending, props.order)
    );
  }, [pagination.page, props.order, props.sortDescending]);

  /** Filter data for search results. */
  const filteredData = useMemo(() => {
    return sortedData.filter(filterGames(props.searchQuery));
  }, [props.searchQuery]);

  return <DataWraper>{sortedData.map(mapGameToComponent)}</DataWraper>;
};

const mapGameToComponent = (game: TGame) => (
  <SingleGame key={game.id} {...game} />
);

const filterGames = (searchQuery: string) => (game: TGame) =>
  searchQuery.length > 0
    ? game.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
    : true;

/**
 * Sorts games ascending/descending by name or rate.
 */
const sortByNameOrRate = (ascending: boolean, order: "name" | "rate") => (
  a: TGame,
  b: TGame
) => {
  const _a = ascending ? a : b;
  const _b = ascending ? b : a;

  return _a[order] <= _b[order] ? 0 : -1;
};

export default ListOfGames;
