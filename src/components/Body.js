import resDataList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState(resDataList);

  return (
    <div className="body">
      <div className="search">SearchBar</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resData) => (
          <RestaurantCard key={resData.data.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
