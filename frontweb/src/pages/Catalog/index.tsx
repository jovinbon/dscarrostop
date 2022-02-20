import CarCard from 'components/CarCard';
import SearchCar from 'components/SearchCar';

const Catalog = () => {
  return (
    <div className="container my-4">
      <SearchCar />
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
