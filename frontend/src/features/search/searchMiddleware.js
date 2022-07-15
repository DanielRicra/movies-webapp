import { createAsyncThunk } from '@reduxjs/toolkit'
import { findMultySearch } from '../../services/movieService'

export const getMultySearch = createAsyncThunk('search/getMultySearch', async (params) => {
   const { page, query } = params
   const response = await findMultySearch(page, query)
   return await response
}) 