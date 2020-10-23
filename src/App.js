import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage/homePage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import Header from './components/header/header.component'
import Authentication from './pages/authentication/authentication.component';
import { auth, createUserProfile } from './authLibrary/firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';


import './App.css';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(onSnapshot => {
          this.props.setCurrentUser({
            id: onSnapshot.id,
            ...onSnapshot.data()
          })
        })
      }
      this.props.setCurrentUser({ userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/shop" component={ ShopPage } />
          <Route exact path="/auth" component={ Authentication } />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);  