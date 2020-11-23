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
            <div>
                <h1> <a href="#/"> <img src={window.logoURL} alt="Dotify Logo" /> </a></h1>
                <h2>To continue, log in to Dotify</h2>
                <button className='free-demo' onClick={() => this.props.loginDemo()}> Free Demo! </button>
                <form onSubmit={this.handleSubmit} >
                    {this.renderErrors()}
                    <br/>
                    <label>Username <br/>
                        <input value={this.state.username} placeholder='Username' onChange={this.handleChange('username')} />
                    </label>
                    <br />
                    <label>Password <br/>
                        <input type="password" value={this.state.password} placeholder='Password' onChange={this.handleChange('password')} />
                    </label>
                    <br />
                    <input className='submit' type="submit" value='LOG IN' />
                    <br/>
                    <a href="#/signup"> SIGN UP FOR DOTIFY</a>
                </form>
            </div>

        );
    }
}

export default LoginForm;