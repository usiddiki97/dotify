import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            birth_date: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signupUser(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <h1>Sign up for free to start listening!</h1>
                <button className='free-demo' onClick={() => this.props.loginDemo()}> Free Demo! </button>
                <form onSubmit={this.handleSubmit} >
                    <h4>Sign up with your email address</h4>
                    {this.renderErrors()}
                    <br />
                    <label>What's your email? <br/>
                        <input value={this.state.email} placeholder='Enter your email' onChange={this.handleChange('email')} />
                    </label>
                    <br />
                    <label>Create a password <br/>
                        <input type="password" value={this.state.password} placeholder='Create a password' onChange={this.handleChange('password')} />
                    </label>
                    <br />
                    <label>What should we call you? <br/>
                        <input value={this.state.username} placeholder='Enter a username' onChange={this.handleChange('username')} />
                    </label>
                    <br />
                    <label>What's your date of birth? <br/>
                        <input type="date" value={this.state.birth_date} onChange={this.handleChange('birth_date')} />
                    </label>
                    <br />
                    <label>What's your gender?</label> <br/>
                    <label>
                        <input type="radio" name='gender' value='Male' onChange={this.handleChange('gender')}/>Male
                    </label>
                    <label>
                        <input type="radio" name='gender' value='Female' onChange={this.handleChange('gender')} />Female
                    </label>
                    <label>
                        <input type="radio" name='gender' value='Non-Binary' onChange={this.handleChange('gender')}/>Non-Binary
                    </label>
                    <br />
                    <input className='submit' type="submit" value='SIGN UP' />
                    <br/>
                    <p>Have an account? <Link to="/login">Log in</Link></p>
                </form>
            </div>
        );
    }
}

export default SignupForm;
