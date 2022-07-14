import { useParams } from "react-router-dom"
import { useTv } from '../hooks/tvHook'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

import defaultImg from '../../assets/defaultImg.jpg'
import SpinnerLoading from "../SpinnerLoading"

const TVDetails = () => {
   const { id: tvId } = useParams()

   const { tv, videos, loading } = useTv(tvId)

   if (loading) {
      return (
         <SpinnerLoading title="Loading TV" className="min-h-screen" />
      )
   }

   return (
      <div className='w-full py-20 px-10 text-gray-200'>
         <div className='flex justify-between w-full'>
            <div className='flex flex-col gap-2'>
               <h2 className='text-3xl font-semibold text-gray-100 mt-4'>{tv.name}</h2>
               <p>
                  TV Series &#8226; &nbsp;
                  {new Date(tv.first_air_date).getFullYear()}-
                  {tv.in_production ? ' ' : new Date(tv.last_air_date).getFullYear()} &#8226; &nbsp;
                  {tv?.episode_run_time ? tv?.episode_run_time[0] : '--'}m
               </p>
            </div>
            <div className='flex gap-4'>
               <div>
                  <p>Rating</p>
                  <div className='flex items-center gap-2'>
                     <div className='mask mask-star w-8 h-8 bg-yellow-400'>s</div>
                     <div>
                        <p>{tv.vote_average}/10</p>
                        <p>{tv.vote_count}</p>
                     </div>
                  </div>
               </div>
               <div>
                  <p>Popularity</p>
                  <p>{tv.popularity}</p>
               </div>
            </div>
         </div>
         <div className='flex my-2 flex-col md:flex-row'>
            <img
               className='max-h-[440px] object-cover object-center'
               src={`https://image.tmdb.org/t/p/w500${tv.poster_path || defaultImg}`}
               onError={({ currentTarget }) => {
                  currentTarget.src = defaultImg
               }}
               alt="tv poster"
            />
            <div className='flex-1 flex'>
               <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube.com/embed/${videos ? videos[0]?.key:''}`} 
                  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
               >
               </iframe>
            </div>
         </div>
         <div className='flex flex-col gap-2'>
            <div className='flex gap-2 w-full pb-2'>
               {tv.genres?.map(genre => (
                  <span
                     key={genre.id}
                     className='border-2 text-xs border-gray-400 rounded-2xl px-2 py-1 text-gray-300'
                  >
                     {genre.name}
                  </span>
               ))}
            </div>
            <div className="border-b border-gray-500 py-2">
               <p>Overview</p>
               <p>{tv.overview}</p>
            </div>

            <div className="border-b border-gray-500 flex py-2">
               <p>Creator/s: &nbsp;</p>
               <div className="flex">
                  {tv.created_by?.map(creator => (
                     <Link to={`/people/${creator.id}`} key={creator.id} className='link text-gray-200 hover:text-gray-400'>
                        {creator.name}
                     </Link>
                  ))}
               </div>
            </div>

            <div className="w-full overflow-hidden">
               <h3 className="text-base text-gray-200 my-2">Episodes</h3>
               <div className="flex gap-3 overflow-x-auto w-full flex-wrap">
                  {tv.seasons?.map(season => (
                     <div key={season.id} className='rounded-md'>
                        <img
                           src={`https://image.tmdb.org/t/p/w500${season.poster_path || defaulImg}`}
                           alt="season"
                           className="w-[94px] min-h-[140px] object-cover object-center"
                           onError={({ currentTarget }) => {
                              currentTarget.src = defaultImg
                           }}
                        />
                        <p className="text-sm font-light">{format(new Date(season.air_date), 'MMM d, y')}</p>
                        <h4 className="text-base">{season.name}</h4>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default TVDetails