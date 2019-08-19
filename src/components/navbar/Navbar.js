import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import pdf from '../../assets/resume/resume.pdf';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark mb-4">
                <div className="container myClass">
                    <Link to="/" className="navbar-brand">
                        <img src="https://i.imgur.com/C826S7G.png" alt="logo" height="65"/>
                    </Link>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarMain"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarMain" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ml-auto">
                                <a href="mailto:alx.rios91@gmail.com" className="nav-link">Get In Touch</a>
                            </li>
                            <li className="nav-item ml-auto">
                                <a href={pdf}  className="bold nav-link" target="_blank" rel="noopener noreferrer">Take a Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;