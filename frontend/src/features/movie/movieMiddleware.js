import { createAsyncThunk } from '@reduxjs/toolkit'
import { findLatestMovies, findMovieDetails } from '../../services/movieService'

export const getLatestMovies = createAsyncThunk('movies/getLatestMovies', async (page = 1) => {
   try {
      return await findLatestMovies(page)
   } catch (error) {
      return error.message
   }
})

export const getMovieDetails = createAsyncThunk('movies/getMovieDetails', async (movieId) => {
   return await findMovieDetails(movieId)
})
