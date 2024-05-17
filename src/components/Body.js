import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]); //array destructuring

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    const arrayOfCards = json?.data?.cards;
    const restaurantListing = 'restaurant_grid_listing';
    for (const cardObj of arrayOfCards) {
      if (
        cardObj?.card?.card &&
        cardObj?.card?.card?.id === restaurantListing
      ) {
        //optional chaining
        const resData =
          cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestraunt(resData);
      }
    }
  };

  console.log('body component will render before useEffect');

  //conditional rendering-> component rendering based on a condition
  /* if (listOfRestaurants.length === 0) {
    return <Shimmer />; //Fake UI untill data loads
  } */

  const filterRestaurant = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestraunt(filteredList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">SearchBar</div>
      <div className="filter">
        <button className="filter-btn" onClick={filterRestaurant}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resData) => (
          <RestaurantCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
