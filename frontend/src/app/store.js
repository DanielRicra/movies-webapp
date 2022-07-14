import { configureStore } from "@reduxjs/toolkit"
import movieSlice from "../features/movie/movieSlice"
import searchSlice from "../features/search/searchSlice"

export const store = configureStore({
   reducer: {
      movies: movieSlice,
      search: searchSlice
   }
}) 