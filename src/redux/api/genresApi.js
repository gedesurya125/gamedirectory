import { rawgApi, apiKey } from "./setupApi";

/**
 * Base setup for genres API
 * @param {{}} params
 * @returns
 */
const getGenresApi = (params) =>
  rawgApi.get("/genres", {
    params: {
      key: apiKey,
      ...params,
    },
  });

export const getAllGenresApi = (page = 1) => getGenresApi({page});

