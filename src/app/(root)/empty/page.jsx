import React from 'react';
import empty from '@/assets/EmptyPageImage/empty.jpg';
import Image from 'next/image';
const page = () => {
    return (
        <div className='flex flex-col justify-items-center items-center mt-40'>
            <Image className="mb-4" src={empty} alt="empty" />
            <h2>This page is empty</h2>
            
        </div>
    );
};

export default page;