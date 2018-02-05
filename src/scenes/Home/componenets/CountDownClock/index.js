import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap';

class CountDownClock extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {remaining: '', intervalID: 0};
        this.getDaysRemaining = this.getDaysRemaining.bind(this);
        this.getHoursRemaining = this.getHoursRemaining.bind(this);
        this.getMinutesRemaining = this.getMinutesRemaining.bind(this);
        this.getSecondsRemaining = this.getSecondsRemaining.bind(this);
    }

    getTimeRemaining()
    {
        let t = Date.parse(this.props.deadline) - Date.parse(new Date());
        this.setState({remaining: t})
    }

    componentDidMount()
    {
        this.getTimeRemaining();
        let intervalID = setInterval(this.getTimeRemaining.bind(this), 1000)
        this.setState({intervalID: intervalID})
    }

    componentWillUnmount()
    {
        clearInterval(this.state.intervalID);
    }

    getDaysRemaining()
    {
        return Math.floor(this.state.remaining/(1000*60*60*24));
    }

    getHoursRemaining()
    {
        return Math.floor( (this.state.remaining/1000/60/60) % 24 );
    }

    getMinutesRemaining()
    {
        return Math.floor( (this.state.remaining/1000/60) % 60 );
    }

    getSecondsRemaining()
    {
        return Math.floor( (this.state.remaining/1000) % 60 );
    }

    render() {
        return (
            <Row>
                <Col>
                    <span>Days {this.getDaysRemaining()} </span>
                    <span>Hours {this.getHoursRemaining()} </span>
                    <span>Minutes {this.getMinutesRemaining()} </span>
                    <span>Seconds {this.getSecondsRemaining()} </span>
                </Col>
            </Row>
        )
    }

}
export default CountDownClock