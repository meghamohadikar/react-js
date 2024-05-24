import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]); //array destructuring
  const [searchText, setSearchText] = useState('');
  const [filterList, setFilterList] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
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
        setFilterList(resData);
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
    setFilterList(filteredList);
    console.log(filteredList);
  };

  const searchRestaurant = () => {
    console.log(searchText);
    const searchedList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterList(searchedList);
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
          <button onClick={searchRestaurant}> Search</button>
        </div>

        <button className="filter-btn" onClick={filterRestaurant}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterList.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={'/restaurants/' + restaurant?.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
