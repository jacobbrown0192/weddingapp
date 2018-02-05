import React, { Component } from 'react'
import RSVPBox from './components/RSVPBox'
import {PageHeader} from 'react-bootstrap';

class RSVP extends Component
{
    render()
    {
        return(
            <div>
                <PageHeader>You can RSVP here!</PageHeader>
                <RSVPBox url='http://localhost:3001/api/rsvp' userid={this.props.userid} pollInterval={2000} />
            </div>
        )
    }
}

export default RSVP