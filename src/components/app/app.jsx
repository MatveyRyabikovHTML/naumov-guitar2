import React from 'react';
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import CatalogScreen from '../catalog-screen/catalog-screen';
import BasketScreen from '../basket-screen/basket-screen';
import ErrorScreen from '../error-screen/error-screen';
import {AppRoute, PageTitle} from '../../const';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Redirect to={AppRoute.CATALOG} />
        </Route>
        <Route exact path={AppRoute.CATALOG} render={({location}) => (
          <CatalogScreen title={`Guitar Shop | ${PageTitle.CATALOG}`} pathname={location.pathname} />
        )} />
        <Route exact path={AppRoute.BASKET} render={({location}) => (
          <BasketScreen title={`Guitar Shop | ${PageTitle.BASKET}`} pathname={location.pathname} />
        )} />
        <Route render={() => <ErrorScreen title={`Guitar Shop | ${PageTitle.ERROR}`} />}/>
      </Switch>
    </Router>
  );
};

export default App;
