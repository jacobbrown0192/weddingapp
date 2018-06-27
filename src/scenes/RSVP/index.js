import React, {Component} from 'react'
import RSVPBox from './components/RSVPBox'
import PageHeader from "../../components/PageHeader/index";

const title = "RSVP";
const header_text = "Love is friendship that has caught fire. It is quiet understanding, sharing and forgiving. <br />\n" +
    "It is loyalty through good and bad times. It settles for less than perfection<br /> and makes allowances for human weaknesses.\n" +
    "<br /> <em>\"Répondez s'il vous plaît.\"</em>";

class RSVP extends Component
{
    render()
    {
        return(
            <div>
                <PageHeader title = {title} header_text = {header_text}/>
                <RSVPBox url='/api/rsvp' userid={this.props.userid} pollInterval={2000} />
            </div>
        )
    }
}

export default RSVP