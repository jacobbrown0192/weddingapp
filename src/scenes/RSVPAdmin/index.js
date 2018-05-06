import React, { Component } from 'react';
import {PageHeader} from 'react-bootstrap';

import RSVPAdminBox from './components/RSVPAdminBox';

class RSVPAdmin extends Component
{
    render()
    {
        return(
            <div>
                <PageHeader>
                    Welcome to the admin page. You must be special to be here
                </PageHeader>
                <RSVPAdminBox url='/api/rsvp' pollInterval={2000} power={false}/>
            </div>
        )
    }
}

export default RSVPAdmin