import React, { Component } from 'react'

class AboutContent extends Component
{
    render()
    {
        return(
            <div className="about_content">
                <div className="about_topsign">&amp;</div>
                <div className="full_width_centered">
                    <div className="left12_first">
                        <span className="names_titles">THE BRIDE</span>
                        <h2>KAITLIN QUINLAN</h2>
                        <div className="about_pic_container">
                            <span className="about_picframe"></span>
                            <div className="about_social">
                                <a href="#"><img src="images/social/twitter.png" alt="" title="" /></a>
                                <a href="#"><img src="images/social/facebook.png" alt="" title="" /></a>
                                <a href="#"><img src="images/social/pinterest.png" alt="" title="" /></a>
                            </div>
                            <div className="about_pic"><img src="images/image12.jpg" alt="" title="" /></div>
                        </div>
                        <a href="#" className="thumb_read_more">MORE ABOUT KAITLIN</a>
                        <p>Love is friendship that has caught fire. It is quiet understanding, mutual confidence, <a href="#">sharing and forgiving</a>. It is loyalty through good and bad times. It settles for less than perfection and <strong>makes allowances</strong> for human weaknesses "<a href="#">LOVE QUOTE</a>":</p>
                        <span className="love_quote">Sometimes the heart sees what is invisible to the eye.</span>

                    </div>
                    <div className="left12_last">
                        <span className="names_titles">THE GROOM</span>
                        <h2>JACOB BROWN</h2>
                        <div className="about_pic_container">
                            <span className="about_picframe"></span>
                            <div className="about_social">
                                <a href="#"><img src="images/social/twitter.png" alt="" title="" /></a>
                                <a href="#"><img src="images/social/facebook.png" alt="" title="" /></a>
                                <a href="#"><img src="images/social/pinterest.png" alt="" title="" /></a>
                            </div>
                            <div className="about_pic"><img src="images/image12_2.jpg" alt="" title="" /></div>
                        </div>
                        <a href="#" className="thumb_read_more">MORE ABOUT JACOB</a>
                        <p>I believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience. That laughter is the only cure for grief. And I believe that love is stronger than death "<a href="#">LOVE QUOTE</a>":</p>
                        <span className="love_quote">Where there is love there is life.</span>
                    </div>

                    <div className="clear"></div>
                </div>
            </div>
    )
    }
}

export default AboutContent