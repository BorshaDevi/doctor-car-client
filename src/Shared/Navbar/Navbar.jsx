import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
const Navbar = () => {
  const{user,logOut}=useContext(AuthContext)
  const handleLogOut=()=>{
    logOut()
    .then(result=> {
      console.log(result)
    })
    .catch(error =>console.log(error))
  }
    const links=<>
     <li><NavLink to='/'>Home</NavLink></li>
    
     <li><NavLink to='/blog'>Blog</NavLink></li>
     <li><NavLink to='/contact'>Contact</NavLink></li>
     {
      user?.email?<div className="flex">
         <li><NavLink to='/bookings'>My Bookings</NavLink></li>
        <li className="btn" onClick={handleLogOut}>LogOut</li>
      </div>:<li  className="btn"><NavLink to='/login'>Login</NavLink></li>
     }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
    
    <img src="https://i.ibb.co/HpQ2tDL/35781291-8342585.jpg" className="rounded-full w-9" alt="" />
    <a className="  ml-2 text-xl font-bold text-cyan-400">Car Doctor</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end space-x-5">
  <IoBagOutline  />
  <CiSearch />
  <button className="btn btn-outline btn-secondary">Appointment</button>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;