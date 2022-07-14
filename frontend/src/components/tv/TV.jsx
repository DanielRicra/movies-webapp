import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import defaultImg from '../../assets/defaultImg.jpg'

const TV = ({ tv }) => {
   const navigate = useNavigate();
   const [isMovieHover, setIsMovieHover] = useState(false);

   return (
      <div
         className='w-40 min-w-[160px] flex flex-col rounded-lg hover:scale-105 cursor-pointer transition'
         onMouseEnter={() => setIsMovieHover(true)}
         onMouseLeave={() => setIsMovieHover(false)}
         onClick={() => navigate(`/tv/${tv.id}`)}
      >  
         <div className='flex relative'>
            <img
               src={tv.backdrop_path ? `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`:defaultImg}
               alt="movie"
               className="object-cover object-center w-full min-h-[220px] rounded-lg"
               onError={({currentTarget}) => {
                  currentTarget.src = defaultImg
               }}
            />
            {isMovieHover && (
               <div className='absolute bottom-1 right-2 text-gray-200 flex items-center leading-none bg-opacity-80 bg-neutral p-1 rounded-lg'>
                  <span className='mask mask-star bg-yellow-300 w-4 h-4 mr-1 mb-[2px]'></span>
                  <p className='leading-none font-mono'>{tv.vote_average}/10-</p>
                  <span className='text-xs'>{tv.vote_count}</span>
               </div>
            )}
         </div>
         <h3 className="font-normal text-slate-100 mt-1">{tv.name}</h3>
         <p className='font-sans text-sm text-gray-300 font-light'>
            {new Date(tv.first_air_date).getFullYear()}
         </p>
      </div>
   )
}

export default TV