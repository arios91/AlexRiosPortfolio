import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops';
import './Skills.css';

class Skills extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0}}
                to={{ opacity: 1}}
                config={{delay: 2000, duration: 750}}
            >
                {props => (
                    <div id="skillsSection" style={props} className="text-center vertical-align row">
                        <div className="col-12 col-lg-3"></div>
                        <div className="col-12 col-lg-6 row text-center">
                            <div className="col-12 border-bottom section-head-2">
                                <h2>Skills</h2>
                            </div>
                            <div className="col-12 row">
                                <div className="col">
                                    <div className="mb-3">
                                        <img src="https://i.imgur.com/Z7lHhvd.png" alt="Java" className="skill-image"/><br/>
                                        <span>Java</span>
                                    </div>
                                    <div className="my-3">
                                        <img src="https://i.imgur.com/RyqUsb3.png" alt="Firebase" className="skill-image"/><br/>
                                        <span>Primefaces</span>
                                    </div>
                                    <div className="mt-3">
                                        <img src="https://i.imgur.com/4tBDVQr.png" alt="Node.js" className="skill-image"/><br/>
                                        <span>Node.js</span>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="mb-3">
                                        <img src="https://i.imgur.com/jG1P7CY.png" alt="React" className="skill-image"/><br/>
                                        <span>React</span>
                                    </div>
                                    <div className="my-3">
                                        <img src="https://i.imgur.com/Vjkkhjo.png" alt="IBM DB2" className="skill-image"/><br/>
                                        <span>IBM DB2</span>
                                    </div>
                                    <div className="mt-3">
                                        <img src="https://i.imgur.com/m6FiqJ7.png" alt="Firebase" className="skill-image"/><br/>
                                        <span>Firebase</span>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="mb-3">
                                        <img src="https://i.imgur.com/hjyYJAb.png" alt="Angular" className="skill-image"/><br/>
                                        <span>Angular</span>
                                    </div>
                                    <div className="my-3">
                                        <img src="https://i.imgur.com/lD89q4R.png" alt="Microsoft SQL Server" className="skill-image"/><br/>
                                        <span>MS Sql Server</span>
                                    </div>
                                    <div className="mt-3">
                                        <img src="https://i.imgur.com/7XaOtOX.png" alt="Node.js" className="skill-image"/><br/>
                                        <span>MongoDB</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-lg-3"></div>
                    </div>
                )}
            </Spring>
        )
    }
}

export default Skills;
