import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import pdf from '../../assets/resume/resume.pdf';
import {Spring} from 'react-spring/renderprops';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0}}
                to={{ opacity: 1}}
                config={{delay: 2000, duration: 750}}>
                {props => (
                    // <nav style={props} className="navbar navbar-expand-md navbar-dark">
                    <nav style={props} className="navbar navbar-expand-md navbar-dark">
                        <div className="container">
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
                )}
            </Spring>
                
        )
    }
}

export default Navbar;