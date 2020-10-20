import React from 'react';
import FormInput from '../controls/formInput/formInput.component';
import CustomButton from '../controls/customButton/customButton.component'

import './signUp.style.scss';
import { auth, createUserProfile } from '../../authLibrary/firebase/firebase.utils';

export default class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });

    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, password
            );

            createUserProfile(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log("Error:", error);
        }

    }
    render() {
        return (
            <div className="signUp">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="signUpForm">
                    <FormInput type="text" name="displayName" required autoComplete="on"
                        value={ this.state.displayName }
                        handleChange={ this.handleChange }
                        label="Display Name"
                    />
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
                    <FormInput type="password" name="confirmPassword" required autoComplete="on"
                        value={ this.state.confirmPassword }
                        handleChange={ this.handleChange }
                        label="Confirm Password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit" onClick={ this.handleSubmit }>
                            Sign Up
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}