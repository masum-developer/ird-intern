import FoodItem from "@/components/FoodItem/FoodItem";
import HomeContent from "@/components/HomeContent/HomeContent";
import SettingParagraph from "@/components/SettingParagraph/SettingParagraph";
import Image from "next/image";
import React from "react";
import menusmall from "@/assets/SelectBarImage/menusmall.jpg";
import down from "@/assets/SelectBarImage/down.jpg";

const page = () => {
  const hadleFood = ()=>{
    console.log('masum');
  }
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row gap-2">
        <div className="bg-[#FFFFFF] w-[20%] lg:h-[calc(100vh-175px)] rounded-xl px-4 hidden lg:block scrollbar-thin scrollbar-thumb-gray-200 overflow-y-scroll">
          <FoodItem />
        </div>
        
      <div className="bg-white w-full lg:w-0 rounded-xl px-4 lg:hidden flex justify-between content-center">
          <div className="flex gap-3">
          <Image src={menusmall} alt="menu"></Image>
          <h2>Select Food Item</h2>
          </div>
          <div onClick={hadleFood()}>
          <Image  src={down} alt="down"></Image>
          </div>
      </div>
      
      
        <div className="bg-[#FFFFFF] lg:w-[60%] min-h-screen rounded-xl sm:ml-2 px-4 w-full">
      
          <HomeContent />
      
        </div>
      
      
        <div className="bg-[#FFFFFF] w-[20%] h-80 rounded-xl px-4 hidden lg:block">
          <SettingParagraph />
        </div>
      </div>
    </>
  );
};

export default page;
