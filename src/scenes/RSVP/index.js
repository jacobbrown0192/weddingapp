import React, {Component} from 'react'
import RSVPBox from './components/RSVPBox'
import PageHeader from "../../components/PageHeader/index";

const title = "RSVP";
const header_text = "";

class RSVP extends Component
{
    render()
    {
        return(
            <div id="top">
                <PageHeader title = {title} header_text = {header_text}/>
                <RSVPBox url='/api/rsvp' userid={this.props.userid} pollInterval={2000} AuthHandler={this.props.AuthHandler}/>
            </div>
        )
    }
}

export default RSVP