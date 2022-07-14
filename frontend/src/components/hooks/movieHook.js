
import { useEffect, useState } from 'react'
import { findMovieCrewAndCast, findMovieDetails, findMovieVideos } from '../../services/movieService'

export const useMovie = (movieId) => {
   const [movie, setMovie] = useState({})
   const [castAndCrew, setCastAndCrew] = useState({})
   const [videos, setVideos] = useState([])
   const [movieLoading, setMovieLoading] = useState(false)
   const [castCrewLoading, setCastCrewLoading] = useState(false)

   useEffect(() => {
      setMovieLoading(true)
      setCastCrewLoading(true)
      findMovieDetails(movieId)
         .then(response => {
            setMovie(response.data)
            setMovieLoading(false)
         })
         .catch(error => {
            console.log(error)
         })

      findMovieCrewAndCast(movieId)
         .then(response => {
            setCastAndCrew(response.data)
            setCastCrewLoading(false)
         })
         .catch(error => {
            console.log(error)
         })

      findMovieVideos(movieId)
         .then(response => {
            setVideos(response.data.results)
         })
         .catch(error => {
            console.log(error)
         })
   }, [])
   
   return {
      movie,
      castAndCrew,
      videos,
      movieLoading,
      castCrewLoading
   }
}