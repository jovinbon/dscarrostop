import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="container home-container">
      <div className="home-content-container">
        <div className="home-image-container">
          <MainImage />
        </div>
        <div>
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho.
          </p>
        </div>
      </div>
      <div className="home-button-container">
        <Link to="/cars">
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Home;
