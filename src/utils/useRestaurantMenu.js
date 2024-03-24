import { useState, useEffect } from "react";
import { MENU_API } from "./contants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  });

  const fetchRestaurantMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResMenu(json.data);
  };

  return resMenu;
};

export default useRestaurantMenu;
