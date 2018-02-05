//CommentList.js
import React, { Component } from 'react';
import RSVPAdminItem from "./components/RSVPAdminItem/index";

class RSVPAdminUserList extends Component {
    render() {
        let rsvpNodes = this.props.data.map(rsvp => {
            return (
                <RSVPAdminItem
                    userid={ rsvp.id }
                    uniqueId={ rsvp['_id'] }
                    key={ rsvp['_id'] }
                    onRSVPUpdate={ this.props.onRSVPUpdate }
                    onRSVPDelete={this.props.onRSVPDelete}
                    num={rsvp.num}
                    name= {rsvp.name}
                    attending={rsvp.attending}
                    food={rsvp.food}
                    consideration={rsvp.consideration}
                    power={this.props.power}>
                </RSVPAdminItem>
            )
        });
        return (
            <div>
                <form>
                    { rsvpNodes }
                </form>
            </div>
        )
    }
}
export default RSVPAdminUserList;
