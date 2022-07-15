import axios from "axios"

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const latestMoviesUrl = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=`
const popularMoviesUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=`
const topRatedMoviesUrl = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`
const upcomingMoviesUrl = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=`

const movieCrewAndCastUrl = (movieId) => `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
const movieVideosUrl = (movieId) => `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
const movieDetailUrl = (movieId) => `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`

const multiSearchUrl = (page, query) => `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`

export const findLatestMovies = async (page = 1) => {
   const response = await axios.get(`${latestMoviesUrl}${page}`)
   return await response.data.results
}

export const findPopularMovies = async (page = 1) => {
   const response = await axios.get(`${popularMoviesUrl}${page}`)
   return response
}

export const findTopRatedMovies = async (page = 1) => {
   const response = await axios.get(`${topRatedMoviesUrl}${page}`)
   return response
}

export const findUpcomingMovies = async (page = 1) => {
   const response = await axios.get(`${upcomingMoviesUrl}${page}`)
   return await response.data
}

export const findMovieCrewAndCast = async (movieId) => {
   const response = await axios.get(movieCrewAndCastUrl(movieId))
   return response
}

export const findMovieVideos = async (movieId) => {
   const response = await axios.get(movieVideosUrl(movieId))
   return response
}

export const findMovieDetails = async (movieId) => {
   const response = await axios.get(movieDetailUrl(movieId))
   return response
}

export const findMultySearch = async (page = 1, query) => {
   const response = await axios.get(multiSearchUrl(page, query))
   return await response.data
}