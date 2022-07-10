import { format } from 'date-fns'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Movie = ({ movie }) => {
   const navigate = useNavigate();
   const release = format(new Date(movie.release_date + ' 00:00:00'), 'MMM d, y');
   const [isMovieHover, setIsMovieHover] = useState(false);

   return (
      <div
         className='w-40 min-w-[160px] flex flex-col rounded-lg hover:scale-105 cursor-pointer transition'
         onMouseEnter={() => setIsMovieHover(true)}
         onMouseLeave={() => setIsMovieHover(false)}
         onClick={() => navigate(`/movie/${movie.id}`)}
      >  
         <div className='flex relative'>
            <img
               src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
               alt="movie"
               className="object-cover object-center w-full min-h-[220px] rounded-lg"
            />
            {isMovieHover && (
               <div className='absolute bottom-1 right-2 text-gray-200 flex items-center leading-none bg-opacity-80 bg-neutral p-1 rounded-lg'>
                  <span className='mask mask-star bg-yellow-300 w-4 h-4 mr-1 mb-[2px]'></span>
                  <p className='leading-none font-mono'>{movie.vote_average}/</p>
                  <span className='text-xs'>{movie.vote_count}</span>
               </div>
            )}
         </div>
         <h3 className="font-normal text-slate-100 mt-1">{movie.title}</h3>
         <p className='font-sans text-sm text-gray-300 font-light'>{release}</p>
      </div>
   )
}

export default Movie