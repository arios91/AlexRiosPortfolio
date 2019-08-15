import React, { Component } from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';

class Dashboard extends Component {
    render() {
        return (
            <div id="dash" className="text-white">
                <Intro/>
                <Projects/>
                <Experience/>
                <Skills/>
            </div>
        )
    }
}

export default Dashboard;
