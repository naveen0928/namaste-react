import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withTotalRatingsString } from "./RestaurantCard";
// import { UserContext } from "../utils/UserContext";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import resData from "../utils/mockData";

const Body = () => {
  // local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withTotalRatingsString(RestaurantCard);
  // const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await apiData.json();
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering
  //   if (listOfRestaurants.length === 0) {
  //     return <Shimmer />;
  //   }

  // Array Destructuring
  //   const arr = useState(resData);
  //   const [listOfRestaurants, setListOfRestaurants] = arr;

  // Normal JS variable
  // let listOfRestaurants = [];

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you went offline!!. Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="p-2 m-4">
          <input
            className="border border-solid border-black rounded m-4"
            data-testid="searchInput"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-2 py-1 bg-blue-100"
            onClick={() => {
              const searchedList = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLocaleLowerCase()
                  .match(searchText.toLocaleLowerCase())
              );
              setFilteredRestaurant(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-100 h-12 p-4 mt-8 flex items-center rounded"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.3 ? (
                <RestaurantCardPromoted resCard={restaurant} />
              ) : (
                <RestaurantCard resCard={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
