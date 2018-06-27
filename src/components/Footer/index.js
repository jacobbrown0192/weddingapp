import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style.css';
import '../../colors/blue.css';
import twitter from '../../images/social/twitter.png'
import facebook from '../../images/social/facebook.png'
import pintrest from '../../images/social/pinterest.png'
import google from '../../images/social/google.png'
import instagram from '../../images/social/instagram.png'
import weddingIcon from '../../images/icon-bridesmaid.png'

const weddingIconStyle = {
    height: "128px",
    weight: "128px"
}

class Footer extends Component
{
    render()
    {
        return(
            <div className="footer">
                <div className="full_width_centered">
                    <div className="footer_sign"><span className="swirl_left_transparent"><span className="swirl_right_transparent"><img src={weddingIcon} style={weddingIconStyle} alt="" title="" /></span></span></div>
                    <div className="footer_names">JACOB &amp; KAITLIN</div>
                    <div className="footer_socials">
                        <ul>
                            <li><a href="#"><img src={twitter} alt="" title="" /></a></li>
                            <li><a href="#"><img src={facebook} alt="" title="" /></a></li>
                            <li><a href="#"><img src={pintrest} alt="" title="" /></a></li>
                            <li><a href="#"><img src={google} alt="" title="" /></a></li>
                            <li><a href="#"><img src={instagram} alt="" title="" /></a></li>
                        </ul>
                    </div>
                    <nav className="footer_menu">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/faqs'>FAQ</Link></li>
                            <li><Link to='/schedule'>SCHEDULE</Link></li>
                            <li><Link to='/songrequest'>SONG REQUESTS</Link></li>
                            <li><Link to='/rsvp'>RSVP</Link></li>
                            <li><Link to='/yourstories'>TELL US A STORY</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Footer