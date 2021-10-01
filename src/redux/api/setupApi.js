import axios from "axios";
export const sourceUrl = "https://api.rawg.io/api";
export const apiKey = process.env.REACT_APP_RAWG_API_KEY;
export const rawgApi = axios.create({
  baseURL: sourceUrl
})