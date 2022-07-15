import { Link } from "react-router-dom"

import tmdbLogo from '../assets/the-movie-db-logo.svg'

const Footer = () => {
   return (
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
         <div className="grid grid-flow-col gap-4">
            <Link to='/' className="link link-hover">Home</Link>
            <a className="link link-hover">Movies</a>
            <a className="link link-hover">TV Shows</a>
            <a className="link link-hover">People</a>
         </div>
         <div className="w-full">
            <a href="https://www.themoviedb.org/" target='_blank' className=" flex flex-col gap-1 items-center cursor-pointer">
               <img src={tmdbLogo} alt="data-source-logo" className="w-[82px]" />
               <p className="text-sm font-ligth">Data source</p>
            </a>
         </div>
         <div>
            <p>FYMDB © 2022 - The data source belongs to <a href="https://www.themoviedb.org/" target='_blank' className="link">TMDB</a></p>
         </div>
      </footer>
   )
}

export default Footer