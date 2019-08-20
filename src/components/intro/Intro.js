import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops';

class Intro extends Component {
    state = {
        show: true
    }

    toggle = e => this.setState(state => ({show: !state.show}))

    render() {
        return (
            <div id="intro">
                <Spring
                    from={{ opacity: 0, marginTop: -500}}
                    to={{ opacity: 1, marginTop: 0}}
                    config={{duration: 1000}}
                >
                    {props => (
                        <div style={props}>
                        <h1>Hey There!</h1>
                    </div>
                    )}
                </Spring>
                <Spring
                    from={{ opacity: 0}}
                    to={{ opacity: 1}}
                    config={{delay: 1000, duration: 750}}
                >
                    {props => (
                        <div style={props}>
                            <span>My name is Alejandro Rios, but you can call me Alex.</span>
                            <br/><br/>
                            <span>I'm a Software Engineer based in Austin, Texas with three years of professional experience in designing, developing, testing, and maintaining Java enterprise applications.</span>
                            <br/><br/>
                            <span>I like to spend my my free time playing video games or practicing front end development using Javascript frameworks such are React and Angular along with Node.js and Express.</span>
                        </div>
                    )}

                </Spring>
            </div>
        )
    }
}

export default Intro;
