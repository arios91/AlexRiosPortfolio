import React, { Component } from 'react';
import {Spring, Trail} from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import './Experience.css';

class Experience extends Component {

    state = {
        currentJob : 'samsung',
        samsungListOne: [
            'Manage and control information to lead and optimize the whole production process efficient production and operation of products.',
            'Design and establish efficient system to product on time, develop new products and improve productivity and product quality.',
        ],
        samsungListTwo: ['Java', 'Curl;', 'C#', 'PL/SQL'],
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

    isSamsungSelected = () =>{
        let {currentJob} = this.state;
        return currentJob === 'samsung';
    }

    isConduentSelected = () =>{
        let {currentJob} = this.state;
        return currentJob === 'conduent';
    }

    isHamerSelected = () =>{
        let {currentJob} = this.state;
        return currentJob === 'hamer';
    }

    toggle = () => this.setState(state => ({ toggle: !state.toggle }))

    getDetails = () => {
        let {samsungListOne, samsungListTwo, conduentListOne, conduentListTwo, hamerListOne, hamerListTwo} = this.state;
        let samsung = this.isSamsungSelected();
        let conduent = this.isConduentSelected();
        let listOne = samsung ? samsungListOne : conduent ? conduentListOne : hamerListOne;
        let listTwo = samsung ? samsungListTwo : conduent ? conduentListTwo : hamerListTwo;
        return(
            <div className="text-left">
                <span id="jobTitle" className='job-title'>{samsung ? 'Software Engineer II' : conduent ? 'Software Engineer' : 'Application Developer'}</span><br/>
                <span className="job-title-date">{samsung ? 'September 2019 - Current' : conduent ? 'March 2019 - September 2019' : 'May 2016 - March 2019'}<br/></span>
                <div className="job-details">
                    <ul>
                        <Trail
                            reset
                            items={listOne}
                            from={{opacity: 0, transform: 'translate3d(-80px,-80px,0px)'}}
                            to={{opacity: 1, transform: 'translate3d(0px,0px,0px)'}}
                            config={{duration: 900}}>
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
                                from={{opacity: 0, transform: 'translate3d(-80px,-80px,0px)'}}
                                to={{opacity: 1, transform: 'translate3d(0px,0px,0px)'}}
                                config={{duration: 900}}>
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
        if(e.target.id === 'samsung'){
            job = 'samsung';
        }
        else if(e.target.id === 'conduent'){
            job = 'conduent';
        }else{
            job = 'hamer'
        }
        this.setState({currentJob: job})
    }

    render() {
        let samsung = this.isSamsungSelected();
        let conduent = this.isConduentSelected();
        let hamer = this.isHamerSelected();
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
                                        <div className="col-5">
                                            <ul className="list-group">
                                                <li className="list-group-item text-bold bg-dark border-0 m-2">
                                                    <span id="samsung" className={"company-name" + (samsung ? '' : ' inactive-company')} onClick={this.companyClick}>Samsung Austin Semiconductor</span>
                                                </li>
                                                <li className="list-group-item text-bold bg-dark border-0 m-2">
                                                    <span id="conduent" className={"company-name" + (conduent ? '' : ' inactive-company')} onClick={this.companyClick}>Conduent</span>
                                                </li>
                                                <li className="list-group-item bg-dark border-0 m-2">
                                                    <span id="hamer" className={"company-name" + (hamer ? '' : ' inactive-company')} onClick={this.companyClick}>Hamer Enterprises</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-7 text-center">
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
