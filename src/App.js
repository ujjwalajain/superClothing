import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage/homePage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import Header from './components/header/header.component'
import Authentication from './pages/authentication/authentication.component';
import { auth, createUserProfile } from './authLibrary/firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(onSnapshot => {
          this.setState({
            currentUser: {
              id: onSnapshot.id,
              ...onSnapshot.data()
            }
          })
        })
      }
      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/shop" component={ ShopPage } />
          <Route exact path="/auth" component={ Authentication } />
        </Switch>
      </div>
    );
  }
}


