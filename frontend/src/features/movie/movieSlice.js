import { createSlice } from '@reduxjs/toolkit'
import { getLatestMovies, getMovieDetails } from './movieMiddleware'

export const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [],
      movie: {},
      loading: 'idle',
      movieLoading: 'idle',
      error: null,
   },
   reducers: {

   },
   extraReducers: builder => {
      builder
         .addCase(getLatestMovies.pending, (state) => {
            state.loading = 'loading'
         })
         .addCase(getLatestMovies.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.movies = action.payload
         })
         .addCase(getMovieDetails.pending, (state) => {
            state.movieLoading = 'loading'
         })
         .addCase(getMovieDetails.fulfilled, (state, action) => {
            state.movieLoading = 'succeeded'
            state.movie = action.payload
         })
   }
})

export const latestMovies = (state) => state.movies.movies 
export const latestMoviesLoading = (state) => state.movies.loading 

export const movieDetails = (state) => state.movies.movie 
export const movieLoading = (state) => state.movies.movieLoading 

export const {} = movieSlice.actions
export default movieSlice.reducer