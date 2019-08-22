import React, { Component } from 'react';
import Intro from '../intro/Intro';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Experience from '../experience/Experience';
import Navbar from '../navbar/Navbar';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class Dashboard extends Component {
    render() {
        return (
            <div id="dash" className="text-white">
                <Parallax ref={ref => (this.parallax = ref)} pages={3}>

                    <ParallaxLayer offset={0} speed={0.5}>
                        <Intro/>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1}>
                        <Navbar/>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} factor={1} speed={0.5}>
                        <Projects/>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2} factor={1} speed={0.5}>
                        <Experience/>
                    </ParallaxLayer>

                    <ParallaxLayer offset={3} factor={0.5} speed={0.5}>
                        <Skills/>
                    </ParallaxLayer>
                </Parallax>
            </div>
        )
    }
}

export default Dashboard;
