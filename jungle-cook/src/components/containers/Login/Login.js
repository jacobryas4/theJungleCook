import React, { Component } from 'react';
import './Login.scss';
import "../../UI/Button/Button";

const login = () => (
    <div className="Login">

    <div className="Login__container">
    
        <div className="Login__container--login">

            <h1>Login Here!</h1>
            <form action="#" method='post'>
                <input type="email" name="email" placeholder="Email Address" />
                <input type="password" name="password" placeholder="Password"/>
                <input type="submit" value="Login" />
            </form>

        </div>
            
        <div className="Login__container--signUp">

            <p>don't have an account?</p>
            <h1>Sign Up!</h1>
            <form action="#" method='post'>
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name"/>
                <input type="email" name="email" placeholder="Email Address"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="submit" value="Sign Up" />
            </form>
        
        </div>

    
    </div>
    
    </div>
)

export default login;