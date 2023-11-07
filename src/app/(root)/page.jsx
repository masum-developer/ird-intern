import NavBar from '@/components/NavBar/NavBar';
import SideMenu from '@/components/SideMenu/SideMenu';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <>
      <NavBar/>
      <div>
        <aside className='w-10 min-h-screen bg-slate-100'>
            <SideMenu/>
            
        </aside>
        <main>
                    <h2>Masum</h2>
        </main>
      </div>
      
    </>
    );
};

export default page;

