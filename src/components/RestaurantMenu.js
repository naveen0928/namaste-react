import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) {
    return <h1>Loading...</h1>;
  }

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
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - {" Rs."}
              {item.card.info.price / 100 || 0}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
