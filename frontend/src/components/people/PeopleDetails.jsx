import { useParams } from 'react-router-dom'
import { usePerson } from '../hooks/personHook'
import defaulImg from '../../assets/default-user-image.png'
import { differenceInYears, format } from 'date-fns'
import SpinnerLoading from '../SpinnerLoading'

const PeopleDetails = () => {
   const { id: personId } = useParams()

   const { person, loading, loadingImgs, images } = usePerson(personId)

   if (loading) {
      return (
         <SpinnerLoading title='Loading' className='min-h-screen' />
      )
   }

   return (
      <div className='py-20 px-10 text-gray-200 w-full'>
         <h2 className='mt-3 mb-4 text-3xl'>{person.name}</h2>
         <div className='flex flex-col md:flex-row gap-5'>
            <img
               src={person.profile_path ? `https://image.tmdb.org/t/p/w500${person.profile_path}` : defaulImg}
               alt="Person"
               className='rounded-l-xl object-cover max-h-[460px]'
            />
            <div className='flex flex-col gap-2'>
               <p className='text-[15px] leading-relaxed font-normal'>{person.biography}</p>
               <p className='flex gap-3'>Born:
                  <span className='text-gray-300 font-light'>
                     {person.birthday ? format(new Date(person.birthday), 'MMMM d, y') : 'no-data'} in {person.place_of_birth || 'no-data'}
                  </span>
               </p>
               {person.deathday && (
                  <p className='flex gap-3'>Died:
                     <span className='text-gray-300 font-light'>
                        {format(new Date(person.deathday), 'MMMM d, y')} (age {differenceInYears(new Date(person.deathday), new Date(person.birthday))})
                     </span>
                  </p>
               )}
               {person.homepage && (
                  <div className='flex gap-2'>
                     <p>Homepage: </p>
                     <a href={person.homepage} target='_blank' className='link text-gray-300 font-light hover:text-gray-400'>{person.homepage}</a>
                  </div>
               )}
               <div className='flex flex-col gap-1'>
                  <p>Also known as: </p>
                  <ol className='px-1 list-decimal'>
                     {person.also_known_as?.map((name, i) => (
                        <li key={`${i}-${name}`} className='ml-5 px-1 text-gray-300 font-light'>{name}</li>
                     ))}
                  </ol>
               </div>
            </div>
         </div>

         {loadingImgs ? (
            <SpinnerLoading title={`Loading Photos of ${person.name || 'someone'}`} />
         ) : (
            <div className='w-full flex flex-col items-center'>
               <h3 className='my-2 text-2xl text-left w-full'>Photos</h3>
               <div className="carousel border border-gray-600 rounded-xl max-w-[400px]">
                  {images.map((img, i) => (
                     <div key={i} id={`item${i + 1}`} className="carousel-item w-full">
                        <img src={`https://image.tmdb.org/t/p/w500${img.file_path}`} className="max-h-[600px] h-auto w-full" />
                     </div>         
                  ))}
               </div>
               <div className="flex justify-center w-full py-2 gap-2 overflow-x-auto">
                  {images.map((img, i) => (
                     <a key={img.file_path} href={`#item${i + 1}`} className="btn btn-xs">{i + 1}</a>
                  ))}
               </div>
            </div>
         )}
      </div>
   )
}

export default PeopleDetails