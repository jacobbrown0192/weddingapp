import React, { Component } from 'react'
import PageHeader from "../../components/PageHeader/index";
import MapLocation from "../../components/MapLocation/index";
import '../../colors/blue.css';
import '../../style.css';
import bedbathlogo from '../../images/wedding_website_registry/bedbathbeyond.jpg';
const title = "FREQUENTLY ASKED QUESTIONS";
const header_text = "";

class FAQs extends Component
{
    render()
    {
        return(
            <div id="faq">
                <PageHeader title={title} header_text={header_text}/>
                <div className="page_content">
                    <div className="left_full">
                        <h2 className="faq-header">
                            What is the bar situation at the reception?
                        </h2>
                        <p className="faq-paragraph">
                            There will be a cash bar during the reception.
                        </p>
                    </div>
                    <div className="left_full">
                        <h2 className="faq-header">
                            Are children welcome at the reception?
                        </h2>
                        <p className="faq-paragraph">
                            Yes!
                        </p>
                    </div>
                    <div className="left_full">
                        <h2 className="faq-header">
                            What is the schedule for the day?
                        </h2>
                        <p className="faq-paragraph">
                            The ceremony will be at 2:30pm, followed by a reception and dance at 7:00pm.
                        </p>
                    </div>
                    <div className="left_full" id="map_location">
                        <h2>WEDDING LOCATION ON MAP</h2>
                        <MapLocation/>
                    </div>
                    <div className="left_full">
                        <h2 className="faq-header">
                            Is there parking available on site?
                        </h2>
                        <p className="faq-paragraph">
                            Yes, there is free parking available on site.
                        </p>
                    </div>
                    <div className="left_full">
                        <h2 className="faq-header">
                            Will the ceremony take place inside or outside?
                        </h2>
                        <p className="faq-paragraph">
                            The ceremony will take place outside at Glendenning. Please sunscreen (or umbrella) accordingly!
                        </p>
                    </div>
                    <div className="left_full">
                        <h2 className="faq-header">
                            Will there be options for the meal at the reception?
                        </h2>
                        <p className="faq-paragraph">
                            Yes, there will be two options to choose from: chicken and vegetarian. Please include your selection and any dietary restrictions when RSVPing.
                        </p>
                    </div>
                    <div className="left_full">
                        <h2 className="faq-header">
                            RSVP Deadline
                        </h2>
                        <p className="faq-paragraph">
                            Please RSVP by June 1, 2019.
                        </p>
                    </div>
                    <div className="left_full">
                        <h2 className="faq-header">
                            What time will the reception end?
                        </h2>
                        <p className="faq-paragraph">
                            The reception will end at 2am.
                        </p>
                    </div>
                    <div className="left_full" id="registry">
                        <h2 className="faq-header">
                            Wedding Registry Links
                            <ul>
                                <li className="registryimage"><a target="_blank" rel="noopener noreferrer" href="https://www.bedbathandbeyond.ca/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&inventoryCallEnabled=true&registryId=546131981&pwsurl=&searchParam=kaitlin%20quinlan"><img src={bedbathlogo} alt="" title="" /></a></li>
                            </ul>
                        </h2>
                    </div>
                    <div>
                        <p className="faq-paragraph">
                            If you have a question that has not been answered on this page, feel free to contact us!
                        </p>
                    </div>
                </div>
            <div className="clear"/>
            </div>
        )
    }
}

export default FAQs