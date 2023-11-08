import React from "react";

const FoodItem = () => {
  return (
    <div>
      <div className="p-1 flex gap-2 border rounded-md border-red-400 mt-3 ">
        <button className="bg-red-100 px-1 rounded"><small className="text-red-700">Fruits</small></button>
        <button className="bg-white px-1 rounded hover:bg-slate-200"><small>Vegetables</small></button>
      </div>
    </div>
  );
};

export default FoodItem;
