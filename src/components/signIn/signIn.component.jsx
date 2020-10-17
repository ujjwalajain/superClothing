import React from 'react';

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
                    <input type="email" name="email" required
                        value={this.state.email}
                        onChange={this.handleChange} />
                    <label value="Email">
                    <input type="password" name="password" required
                        value={this.state.password}
                        onChange={this.handleChange} />
                    <label value="Password"></label>
                    </label>
                    <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}