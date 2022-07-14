import { useEffect, useState } from 'react'
import { findTvDetails, findTvVideos } from '../../services/tvService'

export const useTv = (tvId) => {
   const [tv, setTv] = useState({})
   const [loading, setLoading] = useState(false)
   const [videos, setVideos] = useState([])

   useEffect(() => {
      setLoading(true)
      findTvDetails(tvId)
         .then(response => {
            setTv(response.data)
            setLoading(false)
         })   
         .catch(error => {
            console.log(error)
         })   
      
      findTvVideos(tvId)
         .then(response => {
            setVideos(response.data.results)            
         })
         .catch(error => {
            console.log(error)
         })
   }, [])

   return {tv, videos, loading}
}