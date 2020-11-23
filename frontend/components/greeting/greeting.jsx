import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logoutSession }) => {
    const sessionLinks = () => (
        <nav className='session-links'>
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <nav className='personal-greeting'>
            <h2>Hi, {currentUser.username}</h2>
            <button onClick={logoutSession}>Log Out</button>
        </nav>
    );

    return (
        <div className="nav-bar">
            <nav className="nav-bar-left">
                <Link to='/'><img className='nav-bar-logo' src={window.logoURL} alt="Dotify Logo" /></Link>
            </nav>
            <nav className="nav-bar-right">
                {currentUser ? personalGreeting() : sessionLinks()}
            </nav>
        </div>
    )
};


export default Greeting;