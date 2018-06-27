import React, { Component } from 'react'
import Moment from "moment";
import Extendmoment from 'moment-precise-range';
import Link from "react-router-dom/es/Link";

var moment = Extendmoment(Moment)

class CountdownContainer extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {deadline: 'July 19 2019 13:00:00 GMT-0330', intervalID: 0, diff:{ "years": 2, "months": 7, "days": 0, "hours": 6, "minutes": 29, "seconds": 17, "firstDateWasLater":  false }};
    }

    getTimeRemaining()
    {
        let start = Moment(this.state.deadline);
        let end   = Moment();
        let diff = moment(start, end, {returnObject: true});
        this.setState({diff: diff})

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

    render()
    {
        return(
            <div className="countdown_container">
                <h2 className="centered_title">Countdown to Wedding Ceremony</h2>
                <div id="defaultCountdown">
                    <div id="defaultCountdown" className="hasCountdown">
                        <span className="countdown_row countdown_show4">
                            <span className="countdown_section">
                                <span className="countdown_amount">
                                    {this.state.diff.years}
                                </span>
                                <br/>Year
                            </span>
                            <span className="countdown_section">
                                <span className="countdown_amount">
                                    {this.state.diff.months}
                                </span>
                                <br/>Months
                            </span>
                            <span className="countdown_section">
                                <span className="countdown_amount">
                                    {this.state.diff.days}
                                </span>
                                <br/>Days
                            </span>
                            <span className="countdown_section">
                                <span className="countdown_amount">
                                    {this.state.diff.hours}
                                </span>
                                <br/>Hours
                            </span>
                            {/*<span className="countdown_section">*/}
                                {/*<span className="countdown_amount">*/}
                                    {/*{this.state.diff.minutes}*/}
                                {/*</span>*/}
                                {/*<br/>Minutes*/}
                            {/*</span>*/}
                        </span>
                    </div>
                </div>
                <div className="rsvp_button"><span className="swirl_left_small"><span className="swirl_right_small"><Link to='/rsvp'>RSVP</Link></span></span></div>
            </div>
    )
    }
}

export default CountdownContainer