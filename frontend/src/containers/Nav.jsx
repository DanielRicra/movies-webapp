import { Link } from 'react-router-dom' 

import SearchInput from "../components/SearchInput"
import Menus from "../components/Menus"
import UserProfile from '../components/UserProfile'

const Nav = () => {
  return (
    <div className="navbar bg-base-100 w-full py-3 px-8 justify-between fixed border-b-2 border-base-300 z-10">
      <div className="text-2xl text-white">
        <Link to='/' className="btn btn-ghost normal-case text-xl">FYMDB</Link>
      </div>

      <Menus />

      <div className="flex gap-4 items-center">
        <SearchInput />
        <UserProfile />
      </div>
    </div>
  )
}

export default Nav