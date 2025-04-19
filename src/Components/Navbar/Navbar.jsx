import React from 'react';
import { NavLink } from 'react-router';
import { Link } from 'react-router';
import './navbar.css';
import { FaShoppingCart, FaBookmark } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm p-0">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex items-center justify-center">
          <div className="dropdown mr-2 cursor-pointer">
            <div tabIndex={0} role="button" className="  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/cart'}>
                  <FaShoppingCart />
                </NavLink>
              </li>
              <li>
                <NavLink to={'/favorite'}>
                  <FaBookmark />
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="text-xl font-bold">
            Mobile <span className="text-blue-700">Mart</span>
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li>
              {/* className={({ isActive }) => (isActive ? 'text-blue-800' : '')} */}
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/cart'}>
                <FaShoppingCart />
              </NavLink>
            </li>
            <li>
              <NavLink to={'/favorite'}>
                <FaBookmark />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
