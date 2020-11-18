import React from 'react';

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
            <form onSubmit={this.handleSubmit} >
                <h1>Sign Up!</h1>

                {this.renderErrors()}
                <br />
                <label>Email:
                    <input value={this.state.email} onChange={this.handleChange('email')} />
                </label>
                <br />
                <label>Username:
                    <input value={this.state.username} onChange={this.handleChange('username')} />
                </label>
                <br />
                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
                </label>
                <br />
                <label>Birth Date:
                    <input type="date" value={this.state.birth_date} onChange={this.handleChange('birth_date')} />
                </label>
                <br />
                <label>Gender:
                    <input type="radio" value='Male' onChange={this.handleChange('gender')}/>Male
                    <input type="radio" value='Female' onChange={this.handleChange('gender')} /> Female
                </label>
                <br />
                <input type="submit" value='Sign Up!' />
            </form>
        );
    }
}

export default SignupForm;
