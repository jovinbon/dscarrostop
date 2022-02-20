import './styles.css';

import ProductImg from 'assets/images/car-card.svg';
import { Link } from 'react-router-dom';

const CarCard = () => {
  return (
    <div className="car-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div>
        <h4>Audi Supra TT</h4>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
      </div>
      <div>
        <Link to="/404">
          <button>
            <h6>COMPRAR</h6>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
