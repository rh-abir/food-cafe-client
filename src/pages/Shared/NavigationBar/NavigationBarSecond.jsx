import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthPorviders";

const NavigationBarSecond = () => {
  const {user, logOut} = useContext(AuthContext)

  
  console.log(user?.displayName)
  console.log(user?.photoURL)


  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="navbar md:px-20 z-10 bg-[#4406CB] text-white">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Food-Cafe
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li>
                <NavLink to='/' className={({isActive}) => (isActive ? "text-red-700" : "" ) }>Home</NavLink>
              </li> 
              <li>
                <NavLink to='/blog' className={({isActive}) => (isActive ? "text-red-700" : "" ) }>Blog</NavLink>
              </li>
            </ul>
          </div>
        </div>
        {user ? <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div title={user ? user?.displayName : ''} className="w-10 rounded-full">
              <img src={user ? user?.photoURL : "/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={handleLogOut} className="text-black font-bold">Logout</button>
            </li>
          </ul>
        </div> : <><button className="btn btn-sm"><Link to='/login'>Login</Link></button></>}
      </div>
    </div>
  );
};

export default NavigationBarSecond;
