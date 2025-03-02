import { useState } from "react";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer.js";
import mockData from "../utils/mockData.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(mockData);
  const [filteredRestaurants, setFilteredRestaurants] = useState(mockData);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filtered =
      searchText.trim() === ""
        ? listOfRestaurants 
        : listOfRestaurants.filter((res) =>
            res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
          );

    setFilteredRestaurants(filtered || []);
  };

  const [isTopRated, setIsTopRated] = useState(false);


  const filterTopRated = () => {
    if (!isTopRated) {
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4
      );
      setFilteredRestaurants(filteredList || []);
    } else {
      setFilteredRestaurants(listOfRestaurants);
    }
    setIsTopRated(!isTopRated);
  };
  
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {Array.isArray(filteredRestaurants) && filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, index) => (
            <RestaurantCard key={restaurant.info.id || index} resData={restaurant} />
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
