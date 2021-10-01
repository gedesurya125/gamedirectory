import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGamesAction,
  getGamesByGenreAction,
} from "../redux/actions/gamesAction";
import { useQuery } from "./useQuery";


const useGetGames = () => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.games);
  let query = useQuery();
  const page = query.get("page");
  const genres = query.get("genres");
  // console.log(page);

  useEffect(() => {
    if (!genres) {
      dispatch(getGamesAction(page));
    } else {
      dispatch(getGamesByGenreAction(page, genres));
    }
  }, [dispatch, genres, page]);

  return games
}

export default useGetGames
