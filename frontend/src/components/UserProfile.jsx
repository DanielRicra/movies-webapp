
const UserProfile = () => {
   return (
      <div className="dropdown dropdown-end flex items-center">
         <div tabIndex={0} class="avatar online placeholder">
            <div class="flex items-center bg-neutral-focus w-12 rounded-full text-white cursor-pointer">
               <span>MX</span>
            </div>
         </div>
         <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52 top-10">
            <li><a className="hover:bg-primary hover:text-white">Profile</a></li>
            <li><a className="hover:bg-primary hover:text-white">Settings</a></li>
            <li><a className="hover:bg-primary hover:text-white">Logout</a></li>
         </ul>
      </div>
   )
}

export default UserProfile