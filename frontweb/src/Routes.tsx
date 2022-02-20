import NavBar from 'components/NavBar';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import PageNotFound from 'pages/PageNotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cars">
        <Catalog />
      </Route>
      <Route path="/404">
        <PageNotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
