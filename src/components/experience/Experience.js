import React, { Component } from 'react';
import {Spring, Trail} from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import './Experience.css';

class Experience extends Component {

    state = {
        currentJob : 'conduent',
        conduentListOne: [
            'Responsible for migrating legacy project from Struts to React.',
            'Design and create Java REST API to be used alongside new React system.',
            'Support and resolve any issues in legacy Struts project.'
        ],
        conduentListTwo: ['Java', 'Struts', 'React', 'SQL'],
        hamerListOne : [
            'Designed and devloped administrator permissions system.',
            'Ensure Java projects are ADA compliant.',
            'Create and maintain required SQL database tables for web applications.'
        ],
        hamerListTwo: ['Java', 'JSF', 'PrimeFaces', 'SQL']
    };

    isConduentSelected = () =>{
        let {currentJob} = this.state;
        return currentJob === 'conduent';
    }

    toggle = () => this.setState(state => ({ toggle: !state.toggle }))

    getDetails = () => {
        let {conduentListOne, conduentListTwo, hamerListOne, hamerListTwo} = this.state;
        let conduent = this.isConduentSelected();
        let listOne = conduent ? conduentListOne : hamerListOne;
        let listTwo = conduent ? conduentListTwo : hamerListTwo;
        return(
            <div className="text-left">
                <span id="jobTitle" className='job-title'>{conduent ? 'Software Engineer' : 'Application Developer'}</span><br/>
                <span className="job-title-date">{conduent ? 'March 2019 - Current' : 'May 2016 - March 2019'}<br/></span>
                <div className="job-details">
                    <ul>
                        <Trail
                            reset
                            items={listOne}
                            from={{opacity: 0, transform: 'translate3d(80px,-40px,0px)'}}
                            to={{opacity: 1, transform: 'translate3d(0px,0px,0px)'}}
                            config={{duration: 800}}>
                            {item => props => (
                                <li style={props}>{item}</li>
                                )}
                        </Trail>

                    </ul>
                    <div>
                        <span className="tech-stack">Primary Technologies</span>
                        <ul>
                            <Trail
                                reset
                                items={listTwo}
                                from={{opacity: 0, transform: 'translate3d(80px,-40px,0px)'}}
                                to={{opacity: 1, transform: 'translate3d(0px,0px,0px)'}}
                                config={{duration: 800}}>
                                {item => props => (
                                    <li style={props}>{item}</li>
                                )}
                            </Trail>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    companyClick = (e) => {
        e.preventDefault();
        let job = '';
        if(e.target.id === 'conduent'){
            job = 'conduent';
        }else{
            job = 'hamer'
        }
        this.setState({currentJob: job})
    }

    render() {
        return (
            <div id="workSection" className="vertical-align row">
                <div className="col-12 col-lg-3 text-center"></div>
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <div className="col-12 col-lg-6 row text-center">
                            <Spring
                                to={{ opacity: isVisible ? 1 : 0}}
                                config={{duration: 1000}}>

                                {props => (
                                <div style={props} className="col-12 row">
                                    <div className="col-12 border-bottom section-head-7">
                                        <h2>Experience</h2>
                                    </div>

                                    <div className="col-12 row">
                                        <div className="col-5 col-lg-4">
                                            <ul className="list-group">
                                                <li className="list-group-item text-bold bg-dark border-0 m-2">
                                                    <span id="conduent" className="company-name" onClick={this.companyClick}>Conduent</span>
                                                </li>
                                                <li className="list-group-item bg-dark border-0 m-2">
                                                    <span id="hamer" className="company-name" onClick={this.companyClick}>Hamer Enterprises</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-7 col-lg-8 text-center">
                                            {this.getDetails()}
                                        </div>
                                    </div>
                                </div>
                                )}
                            </Spring>
                        </div>
                    )}
                </VisibilitySensor>
                <div className="col-12 col-lg-3 text-center"></div>
            </div>
        )
    }
}

export default Experience;
