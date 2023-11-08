import Image from "next/image";
import React from "react";
import logoImage from "../../assets/NavBarImage/logo.jpg"
import searchImage from "../../assets/NavBarImage/search.jpg"
import brightImage from "../../assets/NavBarImage/brightness.jpg"
import switchImage from "../../assets/NavBarImage/switch.jpg"
import menuImage from "../../assets/NavBarImage/menu.jpg"

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */}
          <a className="btn btn-ghost normal-case text-xl"><Image src={logoImage} alt="logo"></Image></a>
        </div>
        <div className="navbar-center hidden lg:flex relative">
            <input className="border py-1.5 px-4 rounded" type="text" placeholder="Search best food" />
            <Image className="absolute right-1" src={searchImage} alt="search"></Image>

        </div>
        <div className="navbar-end">
        <span className="mr-3 hidden lg:block"><Image src={brightImage} alt="brightness"></Image></span>
          <span className="mr-3 hidden lg:block"><Image src={switchImage} alt="switch"></Image></span>
          <span className="mr-3"><Image src={menuImage} alt="menu"></Image></span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
