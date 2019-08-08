import React, { Component } from 'react'

class Skills extends Component {
    render() {
        return (
            <div className="text-center">
                <h2>My Skills</h2>
                <div className="row">

                    <div className="col-sm">
                        <h5>Front End</h5><hr/><br/>
                        <img src="https://i.imgur.com/jG1P7CY.png" alt="React" width="75"/><br/>
                        <span>React</span><br/>
                        <img src="https://i.imgur.com/hjyYJAb.png" alt="Angular" width="75"/><br/>
                        <span>Angular</span><br/>
                        <img src="https://i.imgur.com/4tBDVQr.png" alt="Node.js" width="75"/><br/>
                        <span>Node.js</span><br/>
                    </div>

                    <div className="col-sm">
                        <h5>Backend</h5><hr/><br/>
                        <img src="https://i.imgur.com/Z7lHhvd.png" alt="Java" width="75"/><br/>
                        <span>Java</span>
                    </div>

                    <div className="col-sm">
                        <h5>Databases</h5><hr/><br/>
                        <img src="https://i.imgur.com/Vjkkhjo.png" alt="IBM DB2" width="75"/><br/>
                        <span>IBM DB2</span><br/>
                        <img src="https://i.imgur.com/lD89q4R.png" alt="Microsoft SQL Server" width="75"/><br/>
                        <span>MS Sql Server</span><br/>
                        <img src="https://i.imgur.com/m6FiqJ7.png" alt="Firebase" width="75"/><br/>
                        <span>Firebase</span><br/>
                        <img src="https://i.imgur.com/7XaOtOX.png" alt="Node.js" width="75"/><br/>
                        <span>MongoDB</span><br/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Skills;
