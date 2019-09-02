import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import './Intro.css';
import Collinear from '../pts/Collinear';

class Intro extends Component {
    handleOnChange = (visible) => {
        this.props.callBackFromParent(visible);
    }

    render() {
        return (
            <div id="intro" className="vertical-align">
                <VisibilitySensor partialVisibility onChange={visible => this.handleOnChange(visible)}>
                {({ isVisible }) => (
                    <div className="row w-100">
                        <div className="col-2 col-lg-3">
                        </div>
                        <div className="col-8 col-lg-6 row text-left">
                            <Spring
                                to={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(100px)"}}
                                config={{delay: 300, duration: 800}}>
                                {props => (
                                    <div style={props} className="col-12">
                                        <span className="main-title">Hey There!</span>
                                    </div>
                                )}
                            </Spring>
                            <Spring
                                to={{ opacity: isVisible ? 1 : 0, marginTop: isVisible ? 0 : -300}}
                                config={{delay: 1200, duration: 1000}}>
                                {props => (
                                    <div style={props} className="col-12">
                                        <div className="intro-text">
                                            <span>My name is Alejandro Rios, but you can call me Alex.</span>
                                            <br/><br/>
                                            <span>I'm a Software Engineer based in Austin with three years of professional experience in designing, developing, testing, and maintaining Java enterprise applications.</span>
                                            <br/><br/>
                                            <span>I like to spend my free time playing video games or practicing front end development using Javascript frameworks such as React and Angular along with Node.js and Express.</span>
                                        </div>
                                    </div>
                                )}
                            </Spring>
                        </div>
                        <div className="col-2 col-lg-3">
                        </div>
                    </div>
                )}
                </VisibilitySensor>
            </div>
        )
    }
}

export default Intro;
