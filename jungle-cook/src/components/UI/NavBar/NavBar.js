import React from 'react';
import Button from '../Button/Button';
import './NavBar.scss';

import Home from '../../containers/Home/Home';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import Browse from '../../containers/Browse/Browse';
import Login from '../../containers/Login/Login';
import Logo from '../../../assets/images/logo.svg';

const navBar = () => (

    
    <div className="NavBar">
    
        {/* Logo */}
        <div className="NavBar--left">
            <div className="NavBar__logo">
                <img src={Logo} alt="logo" />
            </div>
        </div>

        {/* Links plus Button */}
        <div className="NavBar--right">

            <NavLink 
                to="/"
                exact 
                className="NavBar__link"
                activeClassName="my-active"
                activeStyle={{
                    textDecoration: "underline"
                }}>Home</NavLink>
            <NavLink
                to="/browse"
                className="NavBar__link"
                activeClassName="my-active"
                activeStyle={{
                    textDecoration: "underline"
                }}>Browse</NavLink>
            <NavLink
                to="/create"
                className="NavBar__link"
                activeClassName="my-active"
                activeStyle={{
                    textDecoration: "underline"
                }}>Create Recipe</NavLink>
            <NavLink
                to="/your-recipes"
                className="NavBar__link"
                activeClassName="my-active"
                activeStyle={{
                    textDecoration: "underline"
                }}>Your Recipes</NavLink>
            <Button>
            <NavLink
                to="/login"
                className="NavBar__link"
                activeClassName="my-active"
                >Login</NavLink></Button>
            
        </div>

        {/* <Route path="/" exact component={Home} />
        <Route path="/browse" component={Browse} /> */}
        
    </div>
    

);

export default navBar;