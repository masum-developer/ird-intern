import Image from "next/image";
import React from "react";
import searchImage from "@/assets/NavBarImage/search.jpg";
import orange from "@/assets/FoodListImage/orange.jpg";
import apple from "@/assets/FoodListImage/apple.jpg";
import avocado from "@/assets/FoodListImage/avocado.jpg";
const FoodItem = () => {
  return (
    <div className="h-[400vh] scrollbar scrollbar-thumb-rose-500">
      <div className="w- p-1 flex gap-1 border rounded-md border-red-400 mt-3 ">
        <button className="w-1/2 bg-red-100 px-1 rounded">
          <small className="text-red-700">Fruits</small>
        </button>

        <button className="w-1/2 bg-white px-1 rounded hover:bg-slate-200">
          <small>Vegetables</small>
        </button>
      </div>
      <div className="flex relative mt-3">
        <input
          className="border rounded w-56 py-2 px-3  font-medium text-xs"
          placeholder="Search by fruits name"
          type="text"
        />
        <Image
          className="absolute right-1 p-1"
          src={searchImage}
          alt="search"
        ></Image>
      </div>
      <div className="text-xs">
        <h3 className="text-xs my-2">Fruit List</h3>
        <div className="flex justify-items-center items-center border border-white hover:border-red-500 rounded-md p-1">
          <div>
            <Image src={orange} alt="orange"></Image>
          </div>
          <div className="ml-2">
            <h3 className="font-semibold">Oranges</h3>
            <p className="font-light">Vitamin C</p>
          </div>
        </div>
        <div className="flex justify-items-center items-center border border-white hover:border-red-500 rounded-md p-1">
          <div>
            <Image src={apple} alt="apple"></Image>
          </div>
          <div className="ml-2">
            <h3 className="font-semibold">Apples</h3>
            <p className="font-light">Vitamin C</p>
          </div>
        </div>
        <div className="flex justify-items-center items-center border border-white hover:border-red-500 rounded-md p-1">
          <div>
            <Image src={avocado} alt="avocado"></Image>
          </div>
          <div className="ml-2">
            <h3 className="font-semibold">Avocado</h3>
            <p className="font-light">Vitamin C</p>
          </div>
        </div>
        <div className="flex justify-items-center items-center border border-white hover:border-red-500 rounded-md p-1">
          <div>
            <Image src={avocado} alt="orange"></Image>
          </div>
          <div className="ml-2">
            <h3 className="font-semibold">Strawberries</h3>
            <p className="font-light">Vitamin C</p>
          </div>
        </div>
        <div className="flex justify-items-center items-center border border-white hover:border-red-500 rounded-md p-1">
          <div>
            <Image src={avocado} alt="orange"></Image>
          </div>
          <div className="ml-2">
            <h3 className="font-semibold">Mangoes</h3>
            <p className="font-light">Vitamin C</p>
          </div>
        </div>
        <div className="flex justify-items-center items-center border border-white hover:border-red-500 rounded-md p-1">
          <div>
            <Image src={avocado} alt="orange"></Image>
          </div>
          <div className="ml-2">
            <h3 className="font-semibold">Mangoes</h3>
            <p className="font-light">Vitamin C</p>
          </div>
        </div>
        <div className="flex justify-items-center items-center border border-white hover:border-red-500 rounded-md p-1">
          <div>
            <Image src={avocado} alt="orange"></Image>
          </div>
          <div className="ml-2">
            <h3 className="font-semibold">Mangoes</h3>
            <p className="font-light">Vitamin C</p>
          </div>
        </div>
        <div className="flex justify-items-center items-center border border-white hover:border-red-500 rounded-md p-1">
          <div>
            <Image src={avocado} alt="orange"></Image>
          </div>
          <div className="ml-2">
            <h3 className="font-semibold">Mangoes</h3>
            <p className="font-light">Vitamin C</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default FoodItem;
