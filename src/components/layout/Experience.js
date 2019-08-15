import React, { Component } from 'react'

class Experience extends Component {

    state = {
        currentJob : 'conduent'
    };


    getDetails = () => {
        let {currentJob} = this.state;
        let conduent = currentJob === 'conduent';

        return(
            <div className="text-left">
                <span className="job-title">{conduent ? 'Software Engineer' : 'Application Developer'}</span><br/>
                <span className="job-title-date">{conduent ? 'March 2019 - Current' : 'May 2016 - March 2019'}</span><br/>
                <ul className="list-group">
                    {conduent ?
                        <div>
                            <ul>
                                <li>Responsible for migrating legacy project from Struts to React.</li>
                                <li>Design and create Java REST API to be used alongside new React system.</li>
                                <li>Support and resolve any issues in legacy Struts project.</li>
                            </ul>
                            <div>
                                <span className="tech-stack">Primary Technologies</span>
                                <ul>
                                    <li>Java</li>
                                    <li>Struts</li>
                                    <li>React</li>
                                    <li>SQL</li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div>
                            <ul>
                                <li>Designed and devloped administrator permissions system.</li>
                                <li>Ensure Java projects are ADA compliant.</li>
                                <li>Create and maintain required SQL database tables for web applications.</li>
                            </ul>
                            <div>
                                <span className="tech-stack">Primary Technologies</span>
                                <ul>
                                    <li>Java</li>
                                    <li>JSF</li>
                                    <li>PrimeFaces</li>
                                    <li>SQL</li>
                                </ul>
                            </div>
                        </div>
                    }
                </ul>
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
            <div id="workSection" className="text-center">
                <div className="border-bottom">
                    <h2>Experience</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-4 text-left">
                            <ul className="list-group">
                                <li className="list-group-item text-bold bg-dark border-0 m-2">
                                    <span id="conduent" onClick={this.companyClick}>Conduent</span>
                                </li>
                                <li className="list-group-item bg-dark border-0 m-2">
                                    <span id="hamer" onClick={this.companyClick}>Hamer Enterprises</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-8">
                            {this.getDetails()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;
