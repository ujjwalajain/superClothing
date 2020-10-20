import React from 'react';
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';


import './authentication.style.scss';

const Authentication = () => (
    <div className="authentication">
        <SignIn />
        <SignUp />
    </div>
)

export default Authentication;