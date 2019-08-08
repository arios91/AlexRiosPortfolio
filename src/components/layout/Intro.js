import React, { Component } from 'react'
import Navbar from './Navbar';

class Intro extends Component {
    render() {
        return (
            <div>
                <h1>Hey There!</h1>
                <span>My name is Alejandro Rios, but you can call me Alex. <sub>(Picture of me about to hit a piñata below)</sub></span>
                {/* <img src="https://i.imgur.com/I3gdGFO.jpg" alt="alexRiosPicture"/> */}
                <br/><br/>
                <span>I'm a Software Engineer based in Austin, Texas with three years experience in designing, developing, testing, and maintitning Java enterprise applications.</span>
                <br/><br/>
                <span>I like to spend my my free time playing video games or practicing front end development using Javascript frameworks such are React and Angular along with Node.js and Express.</span>
            </div>
        )
    }
}

export default Intro;
