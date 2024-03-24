import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const toJson = await data.json();
    // console.log(toJson.data.cards);
    setResMenu(toJson.data);
  };

  if (resMenu === null) {
    return <h1>Loading...</h1>;
  }

  // console.log(resMenu?.cards[0]?.card?.card?.info);

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;

  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <ul>
        {itemCards?.map((item) => {
          console.log(item);
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - {" Rs."}
              {item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
