import { useState } from "react"

const SearchInput = () => {
   const [search, setSearch] = useState('')

   const handleSubmit = (event) => {
      event.preventDefault()
      console.log(search)
   }

   return (
      <div className="form-control">
         <form className="input-group" onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Search…"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="input z-10 input-bordered bg-base-300 border-transparent text-slate-100 
                          text-base focus:outline-none focus:border focus:border-primary focus:bg-neutral"
            />
            <button type="submit" className="btn btn-square z-20 outline-1 focus:outline-primary">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </button>
         </form>
      </div>
   )
}

export default SearchInput