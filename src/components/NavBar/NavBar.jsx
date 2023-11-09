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
