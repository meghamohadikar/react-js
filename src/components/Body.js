import RestaurantCard from './RestaurantCard';
import resDataList from '../utils/mockData';

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
