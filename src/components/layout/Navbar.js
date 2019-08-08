import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark 
            mb-4">
                <div className="container myClass">
                    <Link to="/" className="navbar-brand">
                    <img src="https://i.imgur.com/C826S7G.png" alt="logo" height="65"/>
                    </Link>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarMain">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMain">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Get in touch</Link>
                            </li>
                            <li>
                                <Link className="nav-link">Take a resume</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;