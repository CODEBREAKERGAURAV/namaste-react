
import RestroCard from "./RestroCard";
import resObj from "../utils/mockdata";
import { useEffect, useState } from "react";

const Body=()=>{

let [listOfRestaurants,setListOfRestraunt]=useState(resObj);
  return(
    <div className="body">
      <div className='filter'>
       <button className="filter-btn" onClick={
        ()=>{
          const filterList=listOfRestaurants.filter(
            (res)=>res.avgRating>4
          );
        }
       }>Top Rated Restaurants</button>
      </div>
      <div className='res-container'>

    
             
      </div>
     

    </div>
   
  )
};

export default Body;