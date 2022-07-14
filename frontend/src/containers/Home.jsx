import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getLatestMovies } from "../features/movie/movieMiddleware";
import { latestMovies, latestMoviesLoading } from "../features/movie/movieSlice";
import LoadingMovies from "../components/movies/LoadingMovies";
import Movies from "../components/movies/Movies";
import { useMovies } from "../components/hooks/moviesHook";
import TVs from "../components/tv/TVs";
import { useTvs } from "../components/hooks/tvsHook";

const Home = () => {
   const dispatch = useDispatch()
   const movies = useSelector(latestMovies)
   const loading = useSelector(latestMoviesLoading)
   const { popularMovies, loadingPopular } = useMovies(1)
   const { popularTvs, loadingPopularTvs, topRatedTvs, loadingTRTvs } = useTvs(1)

   useEffect(() => {
      dispatch(getLatestMovies(1))      
   }, [])

   return (
      <div className="flex flex-col items-start p-8 pt-20 w-screen gap-y-8 overflow-x-hidden">
         <div className="flex flex-col w-full flex-1 overflow-hidden">
            <h1 className="text-slate-100 font-semibold text-xl mb-3">Latest Movies</h1>
            <div className="flex w-full overflow-hidden">
               {loading === 'loading' && (
                  <LoadingMovies />
               )}
               {loading === 'succeeded' && <Movies movies={movies} />}
            </div>
         </div>

         <div className="flex flex-col w-full flex-1 overflow-hidden">
            <h1 className="text-slate-100 font-semibold text-xl mb-3">Popular Movies</h1>
            <div className="flex w-full overflow-hidden">
               {loadingPopular ? (
                  <LoadingMovies />
               ): <Movies movies={popularMovies || []} />}
            </div>
         </div>

         <div className="flex flex-col w-full flex-1 overflow-hidden">
            <h1 className="text-slate-100 font-semibold text-xl mb-3">Top Rated TV Shows</h1>
            <div className="flex w-full overflow-hidden">
               {loadingTRTvs ? (
                  <LoadingMovies />
               ): <TVs tvShows={topRatedTvs || []} />}
            </div>
         </div>

         <div className="flex flex-col w-full flex-1 overflow-hidden">
            <h1 className="text-slate-100 font-semibold text-xl mb-3">Popular TV Shows</h1>
            <div className="flex w-full overflow-hidden">
               {loadingPopularTvs ? (
                  <LoadingMovies />
               ): <TVs tvShows={popularTvs || []} />}
            </div>
         </div>
      </div>
   )
}

export default Home