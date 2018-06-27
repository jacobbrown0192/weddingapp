import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import '../../style.css';
import '../../colors/green.css';
import music from '../../images/icon_music.png'
import location from '../../images/icon_location.png'
import gifts from '../../images/icon_gifts.png'

class HomeBottom extends Component
{
    render()
    {
        return(
            <div className="home_bottom">
                <div className="full_width_centered">
                    <div className="left13">
                        <div className="bottom_icon"><img src={music} alt="" title="" /></div>
                        <h2>SONG REQUESTS</h2>
                        <span className="subtitle">BRING YOUR DANCING SHOES</span>
                        <p></p>
                        <Link to='/songrequest' className="post_read_more">READ ME</Link>
                    </div>
                    <div className="left13">
                        <div className="bottom_icon"><img src={location} alt="" title="" /></div>
                        <h2>WEDDING LOCATION</h2>
                        <span className="subtitle">GLENDENNING GOLF COURSE</span>
                        <p></p>
                        <Link to='/faqs#map_location' className="post_read_more">READ ME</Link>
                    </div>
                    <div className="left13_last">
                        <div className="bottom_icon"><img src={gifts} alt="" title="" /></div>
                        <h2>GIFT REGISTRY</h2>
                        <span className="subtitle">GIVEN FREELY AND OUT OF PURE LOVE</span>
                        <p></p>
                        <Link to='/faqs' className="post_read_more">READ ME</Link>
                    </div>

                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default HomeBottom