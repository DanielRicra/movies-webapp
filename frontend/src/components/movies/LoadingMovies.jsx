
const LoadingMovies = () => {

   return (
      <div className="shadow rounded-md w-full mx-auto flex gap-5">
         {[1,2,3,4,5,6,7,8,9].map(item => (
            <div className="animate-pulse flex space-x-4" key={item}>
               <div className="w-[150px] rounded-lg flex flex-col justify-around gap-2">
                  <div className="bg-slate-700 h-[220px]"></div>
                  <div className="h-3 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-3 bg-slate-700 rounded col-span-2"></div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default LoadingMovies