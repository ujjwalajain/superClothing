import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage/homePage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import Header from './components/header/header.component'
import Authentication from './pages/authentication/authentication.component';

import './App.css';

function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/auth" component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
