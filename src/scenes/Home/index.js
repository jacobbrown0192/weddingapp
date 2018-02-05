import React, { Component } from 'react'
import CountDownClock from "./componenets/CountDownClock/index";
import {Row} from 'react-bootstrap';

class Home extends Component
{
    // let deadine = 'July 19 2019 13:00:00 GMT-0330';
    constructor(props)
    {
        super(props);
        this.state = { deadline: 'July 19 2019 13:00:00 GMT-0330', remaining: '', intervalID: 0}
    }

    render()
    {
        return(
            <div>
                <Row>
                    <h1>Welcome to Jacob and Kaitlins Wedding Website!</h1>
                </Row>
                <CountDownClock deadline={this.state.deadline} />
            </div>
        )
    }
}

export default Home