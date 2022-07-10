import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCast, getCrew, getLoading } from '../../features/castAndCrew/castCrewSlice'
import { getMovieCrewAndCast } from '../../features/castAndCrew/castAndCrewMiddleware'
import Cast from './Cast'
import Crew from './Crew'
import { getMovieDetails } from '../../features/movie/movieMiddleware'
import { movieDetails, movieLoading } from '../../features/movie/movieSlice'

const MovieDetail = () => {
   const dispatch = useDispatch()
   const { id: movieId } = useParams()
   const cast = useSelector(getCast)
   const crew = useSelector(getCrew)
   const loading = useSelector(getLoading)
   const movie = useSelector(movieDetails)
   const detailsLoading = useSelector(movieLoading)

   useEffect(() => {
      dispatch(getMovieCrewAndCast(movieId))
      dispatch(getMovieDetails(movieId))
   }, [])

   return (
      <div className='flex-1 w-full px-3 mx-auto container md:max-w-2xl md:mx-auto lg:mx-auto lg:max-w-4xl py-20 flex flex-col items-start'>

         {detailsLoading === 'loading' ? (
            <div className='w-full text-center'>
               <div className="lds-ring">
                  <div></div><div></div><div></div><div></div>
               </div>
            </div>
         ):(
            <div className='w-full'>
               <div className='flex justify-between w-full'>
                  <div className=''>
                     <h2 className='text-3xl font-semibold text-gray-100 mt-4'>{movie.title}</h2>
                     <p>
                        {movie.release_date} &#8226; &nbsp;
                        {Math.floor(movie.runtime / 60)}h &nbsp;
                        {Math.round(((movie.runtime / 60) - Math.floor(movie.runtime / 60)) * 60)}m
                     </p>
                  </div>
                  <div className='flex gap-4'>
                     <div>
                        <p>Rating</p>
                        <div className='flex items-center gap-2'>
                           <div className='mask mask-star w-8 h-8 bg-yellow-400'>s</div>
                           <div>
                              <p>{movie.vote_average}/10</p>
                              <p>{movie.vote_count}</p>
                           </div>
                        </div>
                     </div>
                     <div>
                        <p>Popularity</p>
                        <p>{movie.popularity}</p>
                     </div>
                  </div>
               </div>
               <div className='flex my-2'>
                  <img 
                     className='max max-h-[440px] object-cover object-center'
                     src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} 
                     alt="movie poster" 
                  />
                  <div className='flex-1 bg-slate-500'>
                     <p>Trailer</p>
                  </div>
               </div>
               <div className=''>
                  <div className='flex gap-2 w-full pb-2'>
                     {movie.genres?.map(genre => (
                        <span 
                           key={genre.id}
                           className='border-2 text-xs border-gray-400 rounded-2xl px-2 py-1 text-gray-300'
                        >
                           {genre.name}
                        </span>
                     ))}
                  </div>
                  <div>
                     <p>Overview</p>
                     <p>{movie.overview}</p>
                  </div>
               </div>
            </div>
         )}

         {loading === 'loading'  && (
            <div className='w-full text-center'>
               <div className="lds-ring">
                  <div></div><div></div><div></div><div></div>
               </div>
            </div>
         )}

         {loading === 'succeeded' && (
            <>
               <Cast cast={cast} />
               <Crew crew={crew} />
            </>
         )}
      </div>
   )
}

export default MovieDetail