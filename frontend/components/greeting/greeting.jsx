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
            <h2>Hi, {currentUser.username}, welcome to my 3rd day of suffering :)</h2>
            <button onClick={logoutSession}>Log Out</button>
        </nav>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;