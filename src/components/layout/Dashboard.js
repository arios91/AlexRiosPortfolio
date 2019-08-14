import React, { Component } from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';

class Dashboard extends Component {
    render() {
        return (
            <div id="dash" className="text-white">
                <Intro/>
                <hr/>
                <Projects/>
                <hr/>
                <Skills/>
            </div>
        )
    }
}

export default Dashboard;
