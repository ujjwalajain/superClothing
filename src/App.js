import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage/homePage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import Header from './components/header/header.component'
import Authentication from './pages/authentication/authentication.component';
import  {auth} from './authLibrary/firebase/firebase.utils';

import './App.css';


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user});

      console.log(user);
    } )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}


