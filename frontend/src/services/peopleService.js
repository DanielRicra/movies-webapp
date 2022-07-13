import axios from "axios";

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY
const baseURL = 'https://api.themoviedb.org/3'
const peopleDetailsUrl = (personId) => `${baseURL}/person/${personId}?api_key=${API_KEY}&language=en-US`
const personImagesUrl = (personId) => `${baseURL}/person/${personId}/images?api_key=${API_KEY}` 

export const findPeopleDetails = async (personId) => {
   const response = await axios.get(peopleDetailsUrl(personId))
   return await response.data
}

export const findPeopleImages = async (personId) => {
   const response = await axios.get(personImagesUrl(personId))
   return await response.data.profiles
}

