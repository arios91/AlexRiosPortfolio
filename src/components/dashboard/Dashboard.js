import React, { Component } from 'react';
import Intro from '../intro/Intro';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Experience from '../experience/Experience';

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
