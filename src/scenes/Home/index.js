import React, { Component } from 'react'

class Home extends Component
{
    // let deadine = 'July 20 2019 13:00:00 GMT-0330';
    constructor(props)
    {
        super(props)
        this.state = { deadline: 'July 20 2019 13:00:00 GMT-0330', remaining: '', intervalID: 0}

    }

    getTimeRemaining()
    {
        var t = Date.parse(this.state.deadline) - Date.parse(new Date());
        console.log('hahaha')
        this.setState({remaining: t})
    }

    componentDidMount()
    {
        this.getTimeRemaining()
        var intervalID = setInterval(this.getTimeRemaining.bind(this), 1000)
        this.setState({intervalID: intervalID})
    }

    componentWillUnmount()
    {
        clearInterval(this.state.intervalID);
    }

    getDaysRemaining(totalTime)
    {
        var days = Math.floor(totalTime/(1000*60*60*24));
        return days
    }

    getHoursRemaining(totalTime)
    {
        var hours = Math.floor( (totalTime/1000/60) % 60 );
        return hours
    }

    getMinutesRemaining(totalTime)
    {
        var minutes = Math.floor( (totalTime/1000/60) % 60 );
        return minutes
    }

    getSecondsRemaining(totalTime)
    {
        var seconds = Math.floor( (totalTime/1000) % 60 );
        return seconds
    }

    render()
    {
        return(
            <div>
                <div>
                    <span>Days {this.getDaysRemaining(this.state.remaining)} </span>
                    <span>Hours {this.getHoursRemaining(this.state.remaining)} </span>
                    <span>Minutes {this.getMinutesRemaining(this.state.remaining)} </span>
                    <span>Seconds {this.getSecondsRemaining(this.state.remaining)} </span>
                </div>
                <h1>Welcome to Jacob and Kaitlins Wedding Website!</h1>
            </div>
        )
    }
}

export default Home