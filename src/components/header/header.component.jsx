import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../authLibrary/firebase/firebase.utils';
import { connect } from 'react-redux';
import { SelectCartHideen } from '../../redux/cart/cart.selectors';
import { SelectCurrentUser } from '../../redux/user/user.selector';

import CartIcon from '../cartIcon/cartIcon.component';
import CartDropdown from "../cartDropdown/cartDropdown.component";

import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logoContainer" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                    (<div className="option" onClick={ () => auth.signOut() }>SIGN OUT</div>)
                    :
                    (<Link className="option" to="/auth">SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown /> }
    </div>
)

const mapStateToProps = (state) => ({
    currentUser: SelectCurrentUser(state),
    hidden: SelectCartHideen(state)
});

export default connect(mapStateToProps)(Header);