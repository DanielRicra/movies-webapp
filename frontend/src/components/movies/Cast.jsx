import { useNavigate } from 'react-router-dom'

import defaultImg from '../../assets/default-user-image.png'

const Cast = ({ cast }) => {
   const navigate = useNavigate()

   return (
      <>
      <h3 className="text-gray-200 font-normal text-xl mt-6 mb-3">Cast</h3>
      <div className="flex gap-5 py-2 flex-wrap"> 
         {
            cast.map(actor => (
               <div 
                  className="card card-compact w-32 bg-base-100 shadow-xl cursor-pointer border border-gray-600" 
                  key={(Math.random() * 1000) + actor.id}
                  onClick={() => navigate(`/people/${actor.id}`)}
               >
                  <img 
                     className="w-ful h-32 object-cover object-center" 
                     src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`: defaultImg} 
                     alt="actor" 
                     onError={({ currentTarget }) => {
                        currentTarget.src = defaultImg
                     }}
                  />
                  <div className="p-2">
                     <h2 className="card-title text-gray-200 font-normal text-base leading-normal">{actor.name}</h2>
                     <p className="text-gray-300 font-light text-sm leading-none">{actor.character}</p>
                  </div>
               </div>
            ))
         }
      </div>
      </>
   )
}

export default Cast