import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";

const Body = () => {
  // local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);

  // Array Destructuring
  //   const arr = useState(resData);
  //   const [listOfRestaurants, setListOfRestaurants] = arr;

  // Normal JS variable
  // let listOfRestaurants = [];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resCard={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
