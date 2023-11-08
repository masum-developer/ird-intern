import React from 'react';
import homeImage from "../../assets/SideBarMenuImage/home.jpg"
import dashboard from '@/assets/SideBarMenuImage/dashboard.jpg';
import arrow from '@/assets/SideBarMenuImage/arrow.jpg';
import video from '@/assets/SideBarMenuImage/video.jpg';
import more from '@/assets/SideBarMenuImage/more.jpg';
import Image from 'next/image';
import Link from 'next/link';
const SideMenu = () => {
    return (
        <>
            <ul>
                <li>
                    <Link href='/'>
                    <Image className='py-10' src={homeImage} alt="home"></Image>
                    </Link>
                
                </li>
                <li>
                  <Link href='/empty'>
                  <Image src={dashboard} alt="dashboard"></Image>
                  </Link>
                </li>
                <li>
                  <Link href='/empty'>
                  <Image className='py-10' src={arrow} alt="dashboard"></Image>
                  </Link>
                </li>
                <li>
                  <Link href='/empty'>
                  <Image src={video} alt="dashboard"></Image>
                  </Link>
                </li>
                <li>
                  <Link href='/empty'>
                  <Image className='py-10' src={more} alt="dashboard"></Image>
                  </Link>
                </li>

            </ul>
            
            
        </>
    );
};

export default SideMenu;