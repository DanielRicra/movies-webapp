import axios from "axios"

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY

const api = axios.create({ baseURL: 'https://api.themoviedb.org/3'})

const tvDetailsUrl = (tvId) => `/tv/${tvId}?api_key=${API_KEY}&language=en-US`

export const findTvDetails = (tvId) => api.get(tvDetailsUrl(tvId))