import React, { Component } from 'react'
import {pafs} from '../../assets/images/petalosArteScreenshot.png';

class Projects extends Component {
    render() {
        return (
            <div id="workSection" className="text-center">
                <div className="border-bottom">
                    <h2>Projects</h2>
                </div>
                <div className="container">
                    <div className="row my-2">
                        <div className="col-6 p-0 text-left">
                            <img src="https://i.imgur.com/yAL7idq.png" alt="test" width="100%"/>
                        </div>
                        <div className="col-6 text-center">
                            <a href="https://www.petalosarte.com" target="_blank" className="project-title">
                                Petalos y Arte Flower Shop
                            </a>
                            <p className="project-description">
                                Fully functional e-commerce site custom built for a local flower shop<br/>
                                which provides same day fresh flower deliver for South Texas.<br/>
                                Built with Angular on a Node.js backend;
                            </p>
                            <div className="w-100">
                                <p className="project-stack">
                                    Tech Stack:<br/>
                                    <p>Angular, Node.js</p> 
                                </p>

                            </div>
                        </div>
                        <div className="col-6 text-cent">
                            <a href="https://ar-webdesigns-restaurant.herokuapp.com/" target="_blank" className="project-title">Restaurant Template</a>
                            <p>
                                Template for a restaurant website with customizable components
                            </p>
                            <div className="w-100">
                                <p className="project-stack">
                                    Tech Stack:<br/>
                                    <p>React</p> 
                                </p>
                            </div>
                        </div>
                        <div className="col-6 p-0 text-left">
                            <img src="https://i.imgur.com/0x9rQuB.png" alt="test" width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
