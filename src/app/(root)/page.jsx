import FoodItem from '@/components/FoodItem/FoodItem';
import HomeContent from '@/components/HomeContent/HomeContent';
import React from 'react';

const page = () => {
    return (
        <>
      
      <div className='w-full flex gap-2'>
                <div className='bg-[#FFFFFF] w-[20%] lg:h-[calc(100vh-175px)] rounded-xl px-4'>
                <FoodItem/>
                </div>
                <div className='bg-[#FFFFFF] w-[60%] min-h-screen rounded-xl px-4'>
                <HomeContent/>
                </div>
                <div className='bg-[#FFFFFF] w-[20%] h-64 rounded-xl px-4'>
                <FoodItem/>
                </div>
            
            </div>

    </>
    );
};

export default page;

