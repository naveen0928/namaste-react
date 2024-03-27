import { useState, useEffect } from "react";
import ItemsList from "./ItemsList";

const ResaurantCategory = ({ data, showIndex, setShowIndex }) => {
  handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 shadow-lg bg-gray-50 p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showIndex && <ItemsList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default ResaurantCategory;
