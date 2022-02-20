import './styles.css';

const SearchCar = () => {
  return (
    <div className="container-search">
      <div className="search">
        <input type="text" placeholder="Digite sua busca"  className="input-text"/>
      </div>
      <div>
          <button>
              <h6>BUSCAR</h6>
          </button>
      </div>
    </div>
  );
};

export default SearchCar;
