import { createSlice } from '@reduxjs/toolkit'
import movieSlice from '../movie/movieSlice'
import { getMultySearch } from './searchMiddleware'

export const searchSlice = createSlice({
   name: 'search',
   initialState: {
      multySearch: {},
      loading: 'idle',
      error: null
   },
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getMultySearch.pending, (state, action) => {
            state.loading = 'loading'
         })
         .addCase(getMultySearch.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.multySearch = action.payload
         })
   }
})

export const searchLoading = state => state.search.loading
export const searchResult = state => state.search.multySearch

export default searchSlice.reducer