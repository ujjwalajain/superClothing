import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homePage/homePage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import CheckoutPage from './pages/checkoutPage/checkoutPage.component';

import Header from './components/header/header.component'
import Authentication from './pages/authentication/authentication.component';
import { auth, createUserProfile } from './authLibrary/firebase/firebase.utils';
import { SelectCurrentUser } from './redux/user/user.selector';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


import './App.css';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log("this.props.currentUser", this.props.currentUser);
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/shop" component={ ShopPage } />
          <Route exact path="/checkout" component={ CheckoutPage } />
          <Route exact path="/auth"
            render={ () =>
              this.props.currentUser ? (<Redirect to="/" />) : (<Authentication />) } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);  