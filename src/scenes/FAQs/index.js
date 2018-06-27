import React, { Component } from 'react'
import PageHeader from "../../components/PageHeader/index";
import MapLocation from "../../components/MapLocation/index";
import '../../colors/blue.css';
import '../../style.css';

const title = "FREQUENTLY ASKED QUESTIONS";
const header_text = "Love is friendship that has caught fire. It is quiet understanding, sharing and forgiving. <br />\n" +
    "It is loyalty through good and bad times. It settles for less than perfection<br /> and makes allowances for human weaknesses.\n" +
    "<br /> <em>\"Répondez s'il vous plaît.\"</em>";

class FAQs extends Component
{
    render()
    {
        return(
            <div>
                <PageHeader title={title} header_text={header_text}/>
                <div className="page_content">
                    <div className="left_full" id="map_location">
                        <h2>WEDDING LOCATION ON MAP</h2>
                        <MapLocation/>
                    </div>
                </div>
            <div className="clear"/>
            </div>
        )
    }
}

export default FAQs