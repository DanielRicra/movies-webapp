import { useEffect, useState } from 'react'
import { findTvDetails } from '../../services/tvService'

export const useTv = (tvId) => {
   const [tv, setTv] = useState({})
   const [loading, setLoading] = useState(false)

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
   }, [])

   return {tv, loading}
}