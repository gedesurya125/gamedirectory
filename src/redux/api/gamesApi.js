import { rawgApi, apiKey } from "./setupApi";

const getGamesApi = (params) =>
  rawgApi.get("/games", {
    // params is an object of parameter
    params: {
      key: apiKey,
      ...params,
    },
  });

//get all games by page number
export const getAllGamesApi = (page) => getGamesApi({ page });
//get all games by genres
export const getGamesByGenreApi = (page, genres) =>
  getGamesApi({ page, genres });
//

//get list of available gendre
