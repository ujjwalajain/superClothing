import React from 'react';
import FormInput from '../controls/formInput/formInput.component';
import CustomButton from '../controls/customButton/customButton.component'
import { auth, signInWithGoogle } from '../../authLibrary/firebase/firebase.utils'

import './signIn.style.scss';

export default class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });

    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log("Error logging in:", error.message);
        }
    }
    render() {
        return (
            <div className="signIn">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form className="signInForm">
                    <FormInput type="email" name="email" required autoComplete="on"
                        value={ this.state.email }
                        handleChange={ this.handleChange }
                        label="Email"
                    />
                    <FormInput type="password" name="password" required autoComplete="on"
                        value={ this.state.password }
                        handleChange={ this.handleChange }
                        label="Password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit" onClick={ this.handleSubmit }>
                            Sign In
                        </CustomButton>
                        <CustomButton type="button" onClick={ signInWithGoogle } isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}