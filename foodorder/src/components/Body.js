import { useState, useEffect } from "react";
import RestaurantCard from "./Restaurantcard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
      const data = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
      );
      const json = await data.json();

      console.log(json);
      //optional chaining
      setListOfRestaurants(json?.data?.cards?.[2]?.data?.data?.cards || []);
    
  };

 

  return (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.data?.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
