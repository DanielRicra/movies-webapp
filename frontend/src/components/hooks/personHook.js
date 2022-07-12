import { useEffect, useState } from 'react'
import { findPeopleDetails, findPeopleImages } from '../../services/peopleService'

export const usePerson = (personId) => {
   const [person, setPerson] = useState({})
   const [loading, setLoading] = useState(false)
   const [loadingImgs, setLoadingImgs] = useState(false)
   const [images, setImages] = useState([])

   useEffect(() => {
      setLoading(true)
      findPeopleDetails(personId)
         .then(data => {
            setPerson(data)
            setLoading(false)
         })
         .catch(error => {console.log(error)})

      setLoadingImgs(true)
      findPeopleImages(personId)
         .then(imgs => {
            setImages(imgs)
            setLoadingImgs(false)
         })
         .catch(error => {
            console.log(error)
         })
   }, [])
   
   return {person, loading, images, loadingImgs}
} 
