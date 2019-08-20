import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0, marginRight: -500}}
                to={{ opacity: 1, marginRight: 0}}
                config={{delay: 1500, duration: 750}}
            >
                {props => (
                    <div id="workSection" style={props} className="text-center">
                        <div className="border-bottom">
                            <h2>Projects</h2>
                        </div>
                        <div className="container">
                            <div className="row my-2">
                                <div className="col-12 col-lg-6 p-0">
                                    <img src="https://i.imgur.com/yAL7idq.png" alt="flower shop site image" width="100%"/>
                                </div>
                                <div className="col-12 col-lg-6 text-center">
                                    <a href="https://www.petalosarte.com" target="_blank" className="project-title">
                                        Petalos y Arte Flower Shop
                                    </a>
                                    <p className="project-description">
                                        Fully functional e-commerce site custom built for a local flower shop<br/>
                                        which provides same day fresh flower delivery for South Texas.<br/>
                                        Built with Angular on a Node.js backend.
                                    </p>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-12 col-lg-6 p-0">
                                    <img src="https://i.imgur.com/0x9rQuB.png" alt="restaurant template image" width="100%"/>
                                </div>
                                <div className="col-12 col-lg-6 order-sm-first text-center ">
                                    <a href="https://ar-webdesigns-restaurant.herokuapp.com/" target="_blank" className="project-title">Restaurant Template</a>
                                    <p>
                                        Template for a restaurant website with customizable components.<br/>
                                        Built with Angular
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </Spring>
        )
    }
}

export default Projects;
