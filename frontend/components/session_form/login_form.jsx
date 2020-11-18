import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
        this.props.loginSession(user);
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
                <h1>Login!</h1>

                {this.renderErrors()}
                <br />
                <label>Username:
                    <input value={this.state.username} onChange={this.handleChange('username')} />
                </label>
                <br />
                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
                </label>
                <br />
                <input type="submit" value={this.props.formType} />
            </form>
        );
    }
}

export default LoginForm;