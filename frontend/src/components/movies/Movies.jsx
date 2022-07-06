import Movie from "./Movie"

const Movies = ({ movies }) => {
   
   return (
      <div className="flex w-full gap-5 overflow-x-scroll py-4 overflow-y-hidden">
         {movies.map(movie => (
            <Movie movie={movie} key={movie.id} />
         ))}
      </div>
   )
}

export default Movies