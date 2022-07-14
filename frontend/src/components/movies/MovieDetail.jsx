import React from 'react'
import { useParams } from 'react-router-dom'
import Cast from './Cast'
import Crew from './Crew'
import { useMovie } from '../hooks/movieHook'

const MovieDetail = () => {
   const { id: movieId } = useParams()
   const { movie, videos, castAndCrew, movieLoading, castCrewLoading } = useMovie(movieId)

   return (
      <div className='flex-1 w-full px-3 mx-auto md:px-4 md:mx-auto lg:mx-auto lg:max-w-4xl py-20 flex flex-col items-start'>
         {movieLoading ? (
            <div className='w-full text-center'>
               <div className="lds-ring">
                  <div></div><div></div><div></div><div></div>
               </div>
            </div>
         ) : (
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
               <div className='flex my-2 flex-col md:flex-row'>
                  <img
                     className='md:max-h-[440px] max-w-[260px] object-cover object-center'
                     src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                     alt="movie poster"
                  />
                  <div className='flex-1 flex w-full'>
                     <iframe
                        className="aspect-video w-full"
                        src={`https://www.youtube.com/embed/${videos ? videos[0]?.key : ''}`}
                        title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                     >
                     </iframe>
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

         {castCrewLoading ? (
            <div className='w-full text-center'>
               <div className="lds-ring">
                  <div></div><div></div><div></div><div></div>
               </div>
            </div>
         ) : (
            <>
               <Cast cast={castAndCrew.cast || []} />
               <Crew crew={castAndCrew.crew || []} />
            </>
         )}
      </div>
   )
}

export default MovieDetail