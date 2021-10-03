import React from "react";
import OfficialBanner from "../../components/pageBanner/OfficialBanner";
import FavouriteGames from "../../components/GamesContainer/FavouriteGames";
import useLocalStorage, {FAVOURITE_GAMES} from "../../function/useLocalStorage";
const Favourite = () => {
  const myLocalStorage = useLocalStorage();
  const myFavouriteGames = myLocalStorage.getAllDataStorage(FAVOURITE_GAMES);
  // console.log(myFavouriteGames);
  return (
    <div>
      <OfficialBanner sx={{marginBottom: 2}}>Favourite</OfficialBanner>
      <FavouriteGames games={myFavouriteGames}/>
    </div>
  );
};

export default Favourite;
