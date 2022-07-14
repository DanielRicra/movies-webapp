import TV from "./TV"

const TVs = ({ tvShows }) => {
   
   return (
      <div className="flex w-full gap-5 overflow-x-scroll py-4 overflow-y-hidden">
         {tvShows.map(tvShow => (
            <TV tv={tvShow} key={tvShow.id} />
         ))}
      </div>
   )
}

export default TVs