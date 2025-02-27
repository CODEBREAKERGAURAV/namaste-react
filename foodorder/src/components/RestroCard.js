const RestroCard=(props)=>
  {
    const{resData}=props;
    return(
      <div className='res-card'>
        <h3>{resData.name}</h3>
    
        <img 
          className="res-logo" 
          src={`${resData.cloudinaryImageId}`}
          alt={resData.name} 
        />
        <h4>{resData.cuisines}</h4>
        <h4 className="rating">{resData.avgRating}⭐</h4>
        <h4>{resData.costForTwo}</h4>
        <h4>{resData.deliveryTime} minutes Away</h4>
      </div>
    )
  };

  export default RestroCard;