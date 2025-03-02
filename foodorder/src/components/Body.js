import { useState, useEffect } from "react";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const[filteredRestaurant,setfilterdRestaurant]=useState([]);

  const[SearchText,setSearchText]=useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
      const data = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.3176452&lng=82.9739144&carousel=true&third_party_vendor=1"
      );
      const json = await data.json();

      console.log(json);
      //optional chaining
      setListOfRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilterdRestaurant(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // conditional rendering
      // if(listOfRestaurants.length===0)
      // {
      //   return <Shimmer/>;
      // }
    
  };

 

  return  listOfRestaurants.length===0?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <div className="search">
           <input type="text" className="search-box" value={SearchText}  onChange={(e)=>{
             setSearchText(e.target.value);
           }}/>
           <button onClick={()=>{
            let filtered=listOfRestaurants;
              if(SearchText=="")
              {
                setfilterdRestaurant(listOfRestaurants);
              }
              else
              {
                filtered=listOfRestaurants.filter((res)=>res?.info?.name.toLowerCase().includes(SearchText.toLowerCase()));
              };
              setfilterdRestaurant(filtered);


           }}>Search</button>

        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            setfilterdRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
