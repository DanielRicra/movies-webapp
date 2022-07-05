import axios from "axios"

const latestMoviesUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=de101b94f5d8dad0212f558edc5c9db1&language=en-US&page="

export const findLatestMovies = (page = 1 ) => {
   const response = await axios.get(`${latestMoviesUrl}${page}`)
   return response
}