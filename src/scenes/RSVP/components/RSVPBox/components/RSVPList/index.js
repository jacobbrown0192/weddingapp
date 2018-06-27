//CommentList.js
import React, {Component} from 'react';
import RSVP from './components/RSVP/index';

class RSVPList extends Component {
    render() {
        let rsvpNodes = this.props.data.map(rsvp => {
            return (
                <RSVP
                    userid={ rsvp.id }
                    uniqueId={ rsvp['_id'] }
                    key={ rsvp['_id'] }
                    onRSVPUpdate={ this.props.onRSVPUpdate }
                    num={rsvp.num}
                    name= {rsvp.name}
                    attending={rsvp.attending}
                    food={rsvp.food}
                    consideration={rsvp.consideration} //TODO Pick up from here
                    power={this.props.power}>
                </RSVP>
            )
        })
        return (
            <div className="form_content">
                <h3 className="form_toptitle" id="Note"></h3>
                <form>
                    { rsvpNodes }
                </form>
            </div>
        )
    }
}
export default RSVPList;
