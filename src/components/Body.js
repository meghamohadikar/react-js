import resDataList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  return (
    <div className="body">
      <div className="search">SearchBar</div>
      <div className="res-container">
        {resDataList.map((resData) => (
          <RestaurantCard key={resData.data.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
