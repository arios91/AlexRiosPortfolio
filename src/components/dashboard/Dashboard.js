import React, { Component } from 'react';
import Intro from '../intro/Intro';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Experience from '../experience/Experience';
import Navbar from '../navbar/Navbar';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Collinear from '../pts/Collinear';

class Dashboard extends Component {
    state = {
        setNavbarOpaque: false
    }

    changeNavClass = (inIntro) => {
        this.setState({setNavbarOpaque: !inIntro});
    }

    render() {
        return (
            <div id="dash" className="text-white">
                <Parallax ref={ref => (this.parallax = ref)} pages={4}>

                    <ParallaxLayer offset={0} speed={0}>
                        <Collinear 
                            style={{height: "100%"}}
                            background="#112232">
                        </Collinear>
                    </ParallaxLayer>

                    <ParallaxLayer offset={0} speed={0}>
                        <Intro callBackFromParent={this.changeNavClass}/>
                    </ParallaxLayer>


                    <ParallaxLayer offset={0} factor={0.10} speed={-1} className={`${this.state.setNavbarOpaque ? "setOpaque" : ""}`}>
                        <Navbar/>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} factor={1} speed={0.15}>
                        <Projects/>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2} factor={1} speed={0.15}>
                        <Experience/>
                    </ParallaxLayer>

                    <ParallaxLayer offset={3} factor={1} speed={0.15}>
                        <Skills/>
                    </ParallaxLayer>
                </Parallax>
            </div>
        )
    }
}

export default Dashboard;
