import React from 'react';
import FormInput from '../controls/formInput/formInput.component';
import CustomButton from '../controls/customButton/customButton.component'
import { signInWithGoogle } from '../../authLibrary/firebase/firebase.utils'

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

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    render() {
        return (
            <div className="signIn">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form className="signInForm">
                    <FormInput type="email" name="email" required
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label="Email"
                    />
                    <FormInput type="password" name="password" required
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        label = "Password"
                    />
                    <CustomButton type="submit" onClick={this.handleSubmit}>Sign In</CustomButton>
                    <CustomButton type="submit" onClick={ signInWithGoogle }>Sign In With Google</CustomButton>
                </form>
            </div>
        )
    }
}