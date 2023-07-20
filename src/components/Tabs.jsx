import React from "react";
import {IoFastFoodSharp} from "react-icons/io5";
import {BiDrink} from "react-icons/bi";
export default function Tabs({handleFood, handleDrink, activeTab}) {
  return (
    <ul className="flex justify-between">
      <li className={activeTab === 'Makanan' ? 'border-b-2 border-indigo-500 w-1/2' : "border-b-2 border-black-500 w-1/2"}>
        <button onClick={handleFood} className="relative block p-4 w-full">
          <span className="absolute inset-x-0 -bottom-px h-px w-full"></span>
          <div className="flex items-center justify-center gap-4">
            <IoFastFoodSharp size="18px" color={activeTab === 'Makanan' ? "blue" : ""} />
            <span className={activeTab === 'Makanan' ? "text-sm font-medium text-blue-900" : "text-sm font-medium text-gray-900"}> Makanan </span>
          </div>
        </button>
      </li>

      <li className={activeTab !== 'Makanan' ? "border-b-2 border-indigo-500 w-1/2" : "border-b-2 border-black-500 w-1/2"}>
        <button onClick={handleDrink} className="relative block p-4 w-full">
          <span className="absolute inset-x-0 -bottom-px h-px w-full"></span>

          <div className="flex items-center justify-center gap-4">
            <BiDrink size="18px" color={activeTab !== 'Makanan' ? "blue" : "" } />
            <span className={activeTab !== 'Makanan' ? "text-sm font-medium text-blue-900" : "text-sm font-medium text-gray-900"}> Minuman </span>
          </div>
        </button>
      </li>
    </ul>
  );
}
