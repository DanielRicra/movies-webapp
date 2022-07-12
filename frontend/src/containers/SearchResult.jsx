import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchLoading, searchResult } from '../features/search/searchSlice'

import defaultImg from '../assets/default-user-image.png'
import { getMultySearch } from '../features/search/searchMiddleware'
import { useSearchParams, useNavigate } from 'react-router-dom'

import SpinnerLoading from '../components/SpinnerLoading'
 
const SearchResult = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const searchResponse = useSelector(searchResult)
   const loading = useSelector(searchLoading)
   const [urlParams, setUrlParams] = useSearchParams()

   const { results, total_pages:totalPages, total_results } = searchResponse
   const [currentPage, setCurrentPage] = useState(1)

   useEffect(() => {
      setCurrentPage(urlParams.get('page'))
   }, [urlParams])

   const handleChangePage = (increment=true) => {
      let page = currentPage
      if (increment && page < totalPages) {
         page++
      } else if (!increment && page > 1) {
         page--
      } else {
         return
      }
      setCurrentPage(page)
      dispatch(getMultySearch({page: page, query: urlParams.get('query')}))
      setUrlParams({query: urlParams.get('query'), page: page})
   }

   const handleNavigate = (result) => {
      if (result.media_type === 'movie') navigate(`/movie/${result.id}`)
      if (result.media_type === 'person') navigate(`/people/${result.id}`)
      if (result.media_type === 'tv') navigate(`/tv/${result.id}`)
   } 

   if (loading === 'loading') {
      return (
         <SpinnerLoading
            title={`Searching for ${urlParams.get('query')}`}
            className='min-h-screen'
         />
      )
   }

   return (
      <div className='w-full px-10 pt-24 pb-4 min-h-screen flex flex-col justify-between items-center gap-5'>
         <div className='w-full flex flex-col gap-4'>
            <div className='text-gray-200 mb-6'>Results: {total_results}</div>
            {results?.map(result => (
               <div 
                  key={result.id} 
                  className='h-[126px] flex shadow-xl bg-gray-600 rounded-xl'
                  onClick={() => handleNavigate(result)}
               >
                  <div className=''>
                     <img 
                        className='max-h-[126px] rounded-l-xl object-cover'
                        src={`https://image.tmdb.org/t/p/w500${result.media_type === 'person' ? result?.profile_path: result?.poster_path}`}    
                        alt="image" 
                        onError={({ currentTarget }) => currentTarget.src = defaultImg }
                     />
                  </div>
                  <div className='p-3 overflow-hidden flex-1'>
                     {result.media_type === 'person' ? (
                        <div className='text-gray-200'>
                           <h3>{result.name}</h3>
                           <div className='flex flex-col'>
                              <p className='text-gray-300 font-light'>Know for: </p>
                              <div className='flex flex-wrap pl-4'>                                 
                                 {result?.known_for.map((movie, i) => (
                                    <div key={movie.id} className='text-gray-300 text-sm mr-2'>
                                       {movie.title || movie.name}{(i === result.known_for.length - 1)? '':','}
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     ):(
                        <div className='flex flex-col text-gray-100 justify-between h-full'>
                           <h3>{result.title || result.name}</h3>
                           <div className='flex gap-1 flex-col'>
                              <p className='text-gray-300 text-sm'>Release Date: {result.release_date || '--'}</p>
                              <div className='flex items-center text-gray-300 text-sm'>
                                 <span className='mask mask-star bg-yellow-300 w-3 h-3 mr-1 mb-[2px]'></span>
                                 <p className='leading-none font-mono'>{result.vote_average}/10</p>
                              </div>
                           </div>
                           <div className='text-base font-light text-ellipsis overflow-hidden whitespace-pre'>{result.overview}</div>
                        </div>
                     )}
                  </div>
               </div>
            ))}
         </div>

         {totalPages > 1 && (
            <div className="btn-group">
               {currentPage > 1 && (
                  <button
                     onClick={() => handleChangePage(false)}
                     type='button' 
                     className={`btn ${currentPage === 1 ? 'btn-disabled':''}`}
                  >«</button>
               )}
               <button 
                  type='button'
                  className="btn"
               >{currentPage}</button>
               {currentPage < totalPages && (
                  <button 
                     type='button'
                     onClick={() => handleChangePage(true)}
                     className='btn'
                  >»</button>
               )}
          </div>
         )}
      </div>
   )
}

export default SearchResult