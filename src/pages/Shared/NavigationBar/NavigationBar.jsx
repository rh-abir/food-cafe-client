import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const user = null;
  return (
    <div className="navbar md:px-20 bg-gray-100 bg-opacity-10 fixed">
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        {user ? <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="text-black font-bold">Logout</button>
            </li>
          </ul>
        </div> : <><button className="btn btn-sm"><Link to='/login'>Login</Link></button></>}
      </div>
    </div>
  );
};

export default NavigationBar;
