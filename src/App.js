import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homePage/homePage.component';
import ShopPage from './pages/shopPage/shopPage.component';

import './App.css';

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
