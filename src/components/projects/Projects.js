import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import './Projects.css';

class Projects extends Component {

    render() {
        return (
            <div id="workSection"className="vertical-align">
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <div className="row">
                            <div className="col-12 col-lg-2 text-center"></div>
                            <div className="col-12 col-lg-8 row text-center">
                                <div className="col-12 row">
                                    <Spring
                                        to={{ opacity: isVisible ? 1 : 0}}
                                        config={{duration: 1500}}>
                                            {props => (
                                            <div style={props} className="col-12 border-bottom section-head-2">
                                                <h2>Projects</h2>
                                            </div>
                                        )}
                                    </Spring>
                                    <Spring
                                        to={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(-600px)"}}
                                        config={{delay: 300, duration: 1000}}>
                                            {props => (
                                                <div style={props} className="col-12 row">
                                                    <div className="col-12 col-lg-6">
                                                        <a href="https://www.petalosarte.com" target="_blank" rel="noopener noreferrer" className="project-title">
                                                            <img src="https://i.imgur.com/yAL7idq.png" alt="flower shop site" width="100%"/>
                                                        </a>
                                                    </div>
                                                    <div className="col-12 col-lg-6 order-sm-first text-center">
                                                        <a href="https://www.petalosarte.com" target="_blank" rel="noopener noreferrer" className="project-title">
                                                            Petalos y Arte Flower Shop
                                                        </a>
                                                        <p className="project-description">
                                                            Fully functional e-commerce site custom built for a local flower shop<br/>
                                                            which provides same day fresh flower delivery for South Texas.<br/>
                                                            Built with Angular on a Node.js backend.
                                                        </p>
                                                    </div>
                                                </div>
                                        )}
                                    </Spring>
                                    <Spring
                                        to={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(600px)"}}
                                        config={{delay: 300, duration: 1000}}>
                                            {props => (
                                                <div style={props} className="col-12 row">
                                                    <div className="col-12 col-lg-6">
                                                        <a href="https://ar-webdesigns-restaurant.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="project-title">
                                                            <img src="https://i.imgur.com/0x9rQuB.png" alt="restaurant template" width="100%"/>
                                                        </a>
                                                    </div>
                                                    <div className="col-12 col-lg-6 text-center">
                                                        <a href="https://ar-webdesigns-restaurant.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="project-title">
                                                            Restaurant Template
                                                        </a>
                                                        <p>
                                                            Template for a restaurant website with customizable components.<br/>
                                                            Built with Angular
                                                        </p>
                                                    </div>
                                                </div>
                                        )}
                                    </Spring>
                                </div>
                            </div>
                            <div className="col-12 col-lg-2 text-center"></div>

                        </div>
                    )}
                </VisibilitySensor>
            </div>
        )
    }
}

export default Projects;
