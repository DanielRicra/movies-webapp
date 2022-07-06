import { Link } from 'react-router-dom'

const Menus = () => {
   return (
      <ul className="menu menu-horizontal p-0 gap-3">
         <li tabIndex={0} className='focus:outline-2 focus:outline-primary focus:outline-dashed'>
            <div className="py-2 text-gray-200">Movies</div>
            <ul className="p-2 bg-base-300 z-30">
               <li>
                  <Link to='/search?query=populars_movies' className="hover:bg-primary text-white py-2">
                     Populars
                  </Link>
               </li>
               <li>
                  <Link to='/search?query=top-rated_movies' className="hover:bg-primary text-white py-2">
                     Top Rated
                  </Link>
               </li>
               <li>
                  <Link to='/search?query=upcoming_movies' className="hover:bg-primary text-white py-2">
                     Upcomming
                  </Link>
               </li>
            </ul>
         </li>

         <li tabIndex={0} className='focus:outline-2 focus:outline-primary focus:outline-dashed'>
            <div className="py-2 text-gray-200">TV shows</div>
            <ul className="p-2 bg-base-300 z-30">
               <li>
                  <Link to='/search?query=populars_tvshow' className="hover:bg-primary text-white py-2">
                     Populars
                  </Link>
               </li>
               <li>
                  <Link to='/search?query=toprated_tvshows' className="hover:bg-primary text-white py-2">
                     Top Rated
                  </Link>
               </li>
            </ul>
         </li>

         <li tabIndex={0} className='focus:outline-2 focus:outline-primary focus:outline-dashed'>
            <Link to='/search?query=pupular_people' className="py-2 text-gray-200">People</Link>
         </li>
      </ul>
   )
}

export default Menus