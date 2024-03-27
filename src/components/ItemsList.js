const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        console.log(item)
        const { id, name, price, description, imageId, defaultPrice } =
          item?.card?.info;
        return (
          <div>
            <div
              key={Math.random()}
              className="p-4 m-4 border-b-2 border-gray-300 text-left flex justify-between w-full"
            >
              <div className="flex flex-col w-9/12">
                <div className="py-2">
                  <span className="font-semibold">{name}</span>
                  <span> - ₹{price / 100 || defaultPrice / 100}</span>
                </div>
                <p className="text-xs">{description}</p>
              </div>

              <div className="w-3/12 text-center m-auto">
                <div className="absolute">
                  <button className="p-4 mx-4 h-9 bg-black text-white shadow-lg border">
                    - Add +
                  </button>
                </div>
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    imageId
                  }
                  className="w-full h-20 m-auto"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
