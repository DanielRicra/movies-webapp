import axios from "axios"

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY

const api = axios.create({ baseURL: 'https://api.themoviedb.org/3'})

const popularTvsUrl = (page=1) => `/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`
const topRatedTvsUrl = (page=1) => `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`

const tvDetailsUrl = (tvId) => `/tv/${tvId}?api_key=${API_KEY}&language=en-US`
const tvVideosUrl = (tvId) => `/tv/${tvId}/videos?api_key=${API_KEY}&language=en-US`

export const findTvDetails = (tvId) => api.get(tvDetailsUrl(tvId))
export const findTvVideos = (tvId) => api.get(tvVideosUrl(tvId))
export const findPopularTvs = (page) => api.get(popularTvsUrl(page))
export const findTopRatedTvs = (page) => api.get(topRatedTvsUrl(page))