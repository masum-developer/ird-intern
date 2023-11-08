import FoodItem from '@/components/FoodItem/FoodItem';
import HomeContent from '@/components/HomeContent/HomeContent';
import SettingParagraph from '@/components/SettingParagraph/SettingParagraph';
import React from 'react';

const page = () => {
    return (
        <>
      
      <div className='w-full flex gap-2'>
                <div className='bg-[#FFFFFF] w-[20%] lg:h-[calc(100vh-175px)] rounded-xl px-4 hidden lg:block'>
                <FoodItem/>
                </div>
                <div className='bg-[#FFFFFF] lg:w-[60%] min-h-screen rounded-xl sm:ml-2 px-4 w-full'>
                <HomeContent/>
                </div>
                <div className='bg-[#FFFFFF] w-[20%] h-80 rounded-xl px-4 hidden lg:block'>
                <SettingParagraph/>
                </div>
            
            </div>

    </>
    );
};

export default page;

