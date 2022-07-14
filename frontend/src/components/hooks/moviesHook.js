import { useState, useEffect } from 'react'
import { findPopularMovies } from '../../services/movieService'

export const useMovies = (page=1) => {
   const [popularMovies, setPopularMovies] = useState([])
   const [loadingPopular, setLoadingPopular] = useState(false)

   useEffect(() => {
      setLoadingPopular(true)
      findPopularMovies(page)
         .then(response => {
            setPopularMovies(response.data.results)
            setLoadingPopular(false)
         })
         .catch(error => {
            console.log(error)
         })
   }, [])

   return { popularMovies, loadingPopular }
}