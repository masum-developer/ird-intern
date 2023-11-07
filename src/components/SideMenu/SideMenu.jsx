import React from 'react';
import homeImage from "../../assets/SideBarMenuImage/home.jpg"
import Image from 'next/image';
const SideMenu = () => {
    return (
        <>
            <Image className='py-10' src={homeImage} alt="home"></Image>
            <Image src={homeImage} alt="home"></Image>
        </>
    );
};

export default SideMenu;