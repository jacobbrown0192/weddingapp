import React, { Component } from 'react'
import jacob from '../../../../images/bridegroom/jacob2.jpg'
import kaitlin from '../../../../images/bridegroom/kaitlin4.jpg'

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
                            <div className="about_pic"><img src={kaitlin} alt="" title="" /></div>
                        </div>
                        <p className="bridegroom-bio">Lifelong learner, reader, amateur British historian, Game of Thrones enthusiast, Disney and Harry Potter fanatic. Born and raised in Mt. Pearl (love The Pearl, sorry Jessa). A love of physics and building ROVs in high school led Kaitlin to go into Electrical Engineering, where she met Jacob when they collaborated over a particularly difficult Circuits lab. Jacob and Kaitlin became friends over a shared love of Game of Thrones, Bitter’s pub trivia, and glass bottled Coca-Cola. A year later, they started dating and it’s been an adventure ever since. From Shania in PEI, a road trip around the UK, an interminable home renovation, adventures in Paris and Barcelona, NYC and a cruise with friends, there is never a dull moment. After pursuing her engineering career for a few years, Kaitlin decided to apply for medical school. Growing up with a mother who was a nurse who became a nurse practitioner fostered an interest in medicine, and she decided to take the leap and apply to medicine at MUN. Kaitlin is now in her second year of medical school at MUN. When not studying, Kaitlin enjoys having drinks with friends, attending dance class, quilting, and reading novels.</p>
                        <span className="love_quote">"As he read, I fell in love the way you fall asleep: slowly, then all at once." - John Green, The Fault in Our Stars</span>
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
                            <div className="about_pic"><img src={jacob} alt="" title="" /></div>
                        </div>
                        <p className="bridegroom-bio">Developer, entrepreneur, leader, lifelong learner, and nerd. Jacob is passionate about many things and has many ambitions, but he is most passionate about Kaitlin. Jacob was born in Toronto but promptly brought back to Newfoundland to be raised as a traditional townie. Growing up as the son of a lifelong learner, educator, and technology advocate Jacob became passionate for these subjects as well. Jacob pursued Computer Engineering at MUN where he met the love of his life, Kaitlin Quinlan. Jacob and Kaitlin first met while struggling with a lab when they decided to team up to crush it. They quickly became friends and bonded over their passion for knowledge, nerdy subject matter, and a weekly trivia night at a local pub. Shortly afterwards they started dating and only four short years later, full of challenges and adventure, they got engaged. After graduating university, Jacob took a position with a local start up where he could continue to learn,  build innovative technology, lead, and pursue his entrepreneurial passion. Today Jacob is the Development Lead with ColabSoftware, a local startup, where he continues to pursue his passions both at work and in his free time.</p>
                        <span className="love_quote">Kaitlin is the most amazing woman I have ever met. She is beautiful, intelligent, and funny, she challenges me to be better and is equally ambitious. I am excited to share my love and commitment to Kaitlin with friends and family.</span>
                    </div>

                    <div className="clear"></div>
                </div>
            </div>
    )
    }
}

export default AboutContent