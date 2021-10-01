import { rawgApi, apiKey } from "./setupApi";

/**
 * Base setup for games API
 * @param {{}} params 
 * @returns 
 */
const getGamesApi = (params) =>
  rawgApi.get("/games", {
    params: {
      key: apiKey,
      ...params,
    },
  });

//get all games by page number
export const getAllGamesApi = (page = 1) => getGamesApi({ page });
//get all games by genres
export const getGamesByGenreApi = (page = 1, genres) =>
  getGamesApi({ page, genres });
//

//get list of available gendre
