import { rawgApi, apiKey } from "./setupApi";

export const getGameDetailApi = (id) => rawgApi.get(`/games/${id}`,{
  params:{
    key: apiKey,
  }
})