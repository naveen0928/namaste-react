import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  // Below line is just destructuring instead of passing props as an argument
  // const {resName, cuisine, rating, eta} = props;

  const { resCard } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resCard?.info;
  return (
    <div className="p-1 m-2 w-[230px] bg-gray-50 border border-solid border-gray-300 hover:bg-gray-200">
      <img
        className="p-0 h-56 w-56"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-1 text-lg mx-1">{name}</h3>
      <h4 className="font-semibold py-1 mx-1">{cuisines.join(", ")}</h4>
      <h4 className="py-1 mx-1">{avgRating} ratings</h4>
      <h4 className="py-1 mx-1">{costForTwo}</h4>
      <h4 className="py-1 mx-1">{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
