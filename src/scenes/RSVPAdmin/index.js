import React, { Component } from 'react';

import RSVPAdminBox from './components/RSVPAdminBox';
import PageHeader from "../../components/PageHeader/index";

const title = "RSVP ADMIN PANEL";
const header_text = "Welcome to the admin page. You must be special to be here";

class RSVPAdmin extends Component
{
    render()
    {
        return(
            <div className="admin">
                <PageHeader title = {title} header_text = {header_text}/>
                <RSVPAdminBox url='/api/rsvp' pollInterval={2000} power={false}/>
            </div>
        )
    }
}

export default RSVPAdmin