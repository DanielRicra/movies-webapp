import { useEffect, useState } from "react"
import { findTopRatedMovies } from "../../services/movieService"

import { findPopularTvs, findTopRatedTvs } from '../../services/tvService'

export const useTvs = (page) => {
   const [popularTvs, setPopularTvs] = useState([])
   const [topRatedTvs, setTopRatedTvs] = useState([])
   const [loadingPopularTvs, setLoadingPopularTvs] = useState(false)
   const [loadingTRTvs, setLoadingTRTvs] = useState(false)

   useEffect(() => {
      setLoadingPopularTvs(true)
      setLoadingTRTvs(true)

      findPopularTvs(page)
         .then(response => {
            setPopularTvs(response.data.results)
            setLoadingPopularTvs(false)
         })
         .catch(error => {
            console.log(error)
         })

      findTopRatedTvs(1)
         .then(response => {
            setTopRatedTvs(response.data.results)
            setLoadingTRTvs(false)
         })
         .catch(error => {
            console.log(error)
         })
   }, [])
   
   return { 
      popularTvs,
      loadingPopularTvs,
      topRatedTvs,
      loadingTRTvs 
   }
}