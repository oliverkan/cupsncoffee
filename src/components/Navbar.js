import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from '../cupnbeans-logo.png'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to='/'><img height="100px" src={logo} alt="Home" className="navbar-brand"/></Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link ml-5">Home</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/about" className="nav-link ml-5">About</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/gallery" className="nav-link ml-5">Gallery</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/shop" className="nav-link ml-5">Shop</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/contact" className="nav-link ml-5">Contact</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}