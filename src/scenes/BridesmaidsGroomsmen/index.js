import React, {Component} from 'react'
import PageHeader from "../../components/PageHeader/index";
import '../../colors/blue.css';
import '../../style.css';
import michaela from '../../images/bridal_party/michaela3.jpg'
import meghan from '../../images/bridal_party/meghan.jpeg'
import jessa from '../../images/bridal_party/jessa.jpeg'
import racheal from '../../images/bridal_party/rachela.jpg'
import nathan from '../../images/bridal_party/nathan2.jpg'
import jake from '../../images/bridal_party/Jake.png'
import colten from '../../images/bridal_party/colten.jpg'
import ross from '../../images/bridal_party/ross2.jpg'
import dylan from '../../images/bridal_party/dylan2.jpg'
import douglas from '../../images/bridal_party/douglas2.jpg'
import josh from '../../images/bridal_party/josh4.jpg'
import zack from '../../images/bridal_party/zack3.jpg'
import jess from '../../images/bridal_party/Jess.jpg'
import myfanwy from '../../images/bridal_party/myfanwy2.jpg'
import kelsey from '../../images/bridal_party/Kelsey.jpg'
import kayla from '../../images/bridal_party/kayla.jpg'

const title = "Bridesmaids And Groomsmen";
const header_text = "Meet the Bridal Party!";

class BridesmaidsGroomsmen extends Component
{
    render()
    {
        return(
            <div id="top">
                <PageHeader title={title} header_text={header_text}/>
                <div className="page_content">
                    <div className="full_width_centered">
                    <div className="left12_true">
                        <div className="large-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={josh} alt="" title="" /></div>
                            </div>
                            <h3>JOSHUA BARRETT</h3>
                            <p className="bridalparty-story">
                                Jacob and Josh met in kindergarten and became fast friends. They spent their days running  away from girls, kicking soccer balls around, and playing SNES in Josh's basement. Today they remain best friends sharing many of the same passions from video games to music to entrepreneurship. Jacob and Josh spend many of their important life milestones together and there is no on else Jacob could imagine to have standing next to him on the most important day of his life.
                            </p>
                        </div>
                    </div>
                    <div className="left12_true">
                        <div className="large-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={michaela} alt="" title="" /></div>
                            </div>
                            <h3>MICHEALA QUINLAN</h3>
                            <p className="bridalparty-story">
                                Michaela is Kaitlin’s younger sister. Since day one they both have gotten on each other’s nerves and have been each other’s best friends. From block party lip syncs to watching survivor as kids to competitive (and bruising) go-karting and cleaning chats, Kaitlin and Michaela are always up for doing something together. Michaela and Kaitlin have been through everything together and there’s no one else Kaitlin would have standing next to her on her wedding day.
                            </p>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={nathan} alt="" title="" /></div>
                            </div>
                            <h3>NATHAN DROVER</h3>
                            <p className="bridalparty-story">
                                Jacob has known Nathan since before he can remember. Growing up on the same street meant they spent most every day together playing outside in any weather. Some of their greatest memories are challenging each be it in soccer, hockey, or video games. While Nathan now lives away they still keep in touch and share in their passions for learning and catch up every time Nathan comes back to town.
                            </p>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={meghan} alt="" title="" /></div>
                            </div>
                            <h3>MEGHAN HUSK</h3>
                            <p className="bridalparty-story">
                                Kaitlin and Meghan met in ballet when they were 4 years old and became best friends. Growing up they bonded over their love of dance and the spice girls. Now, they enjoy having a few glasses of wine, hosting parties, and going to movies. Meghan has always been like a second sister to Kaitlin and they remain best friends today.
                            </p>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={douglas} alt="" title="" /></div>
                            </div>
                            <h3>DOUGLAS MATTHEWS</h3>
                            <p className="bridalparty-story">
                                Jacob and Douglas first met in the fifth grade bonding over their love of music and video games. They often spent time playing street hockey. Today they spend time together playing games and spending time at the cabin goofing off and relaxing.
                            </p>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={kelsey} alt="" title="" /></div>
                            </div>
                            <h3>KELSEY BARRETT</h3>
                            <p className="bridalparty-story">
                                Kaitlin has known Kelsey almost as long as she has been dating Jacob as she is married to his best friend. They have grown very close in the last five years, sharing a love of food, wine, fires, games, and the men in their lives. Kelsey has recently introduced Kaitlin to her love of cruises on a trip together last Spring. They are sure it will not be their last.
                            </p>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={dylan} alt="" title="" /></div>
                            </div>
                            <h3>DYLAN MATTHEWS</h3>
                            <p className="bridalparty-story">
                                Jacob and Dylan first met in grade five after Jacob saved Dylan's pencil from the inevitable doom of dropping it on the ground. They became fast friends goofing off and joking around. Today they are either helping each other with projects or, more likely, goofing off.
                            </p>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={jessa} alt="" title="" /></div>
                            </div>
                            <h3>JESSA VOKEY</h3>
                            <p className="bridalparty-story">
                                Jessa and Kaitlin met in their first year of medical school. Their favorite things to do together are cry about neuroanatomy, celebrate every possible situation with cosmos, and plan trips to Disney World instead of paying attention in class. Jessa's least favorite thing about Kaitlin and Jacob is that they live in the west end, despite constant begging to move to Stavanger Drive. Jessa is sure that one day she will be successful in convincing them to move east.
                            </p>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={zack} alt="" title="" /></div>
                            </div>
                            <h3>ZACK CHAULK</h3>
                            <p className="bridalparty-story">
                                Jacob and Zack met in university while studying computer engineering. They bonded doing school work but really became close friends living together in Ottawa sharing an interest in video games, technology, MTG, and many other very nerdy things. Today they spend time playing games and hanging out. Every Sunday they get together be it online or otherwise to catch up and stay in touch.
                            </p>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={racheal} alt="" title="" /></div>
                            </div>
                            <h3>RACHEAL SEYMOUR</h3>
                            <p className="bridalparty-story">
                                Kaitlin and Racheal both did electrical engineering. They became friends after Racheal joined MUN’s underwater ROV team and spent many hours cursing and laughing over the electrical systems of their ROVs. Though Racheal now lives in PEI, they stay in touch by messaging each other and by Kaitlin tagging Racheal in Corgi videos on Facebook.
                            </p>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={colten} alt="" title="" /></div>
                            </div>
                            <h3>COLTEN NORMORE</h3>
                            <p className="bridalparty-story">
                                Jacob and Colton first met in university studying computer engineering. They became fast friends after learning about each other's passion for SSBM and other nerdy things. Their passion for intellectual challenge and games has kept them close friends even today. Colten is also part of the Sunday Games Crew which keeps a close group of friends in touch no matter where they are.
                            </p>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={jess} alt="" title="" /></div>
                            </div>
                            <h3>JESS GUY</h3>
                            <p className="bridalparty-story">
                                Jess and Kaitlin met in their first year of medical school while running for and being elected to student leadership. In the past two years they have bonded over discussing class issues, planning trivia nights, and a shared love of the Food Network. Jess has become a close friend and is looking forward to standing with Kaitlin on this special day.                            </p>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={jake} alt="" title="" /></div>
                            </div>
                            <h3>JAKE PARSONS</h3>
                            <p className="bridalparty-story">
                                Jacob and Jake first met studying computer engineering in university and instantly became friends. Their shared passion in aviation, technology, development, music, high brow jokes, video games, and so much more brought them close. Even their names show how similar they are. Jake now lives in Ottawa but Jacob, along with a couple of close friends, get together online to keep in touch and talk about their lives, what's new, or just to kick back and have fun. Taking this time every week has kept Jacob and Jake extremely while being so far apart.
                            </p>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={myfanwy} alt="" title="" /></div>
                            </div>
                            <h3>MYFANWY PRICE</h3>
                            <p className="bridalparty-story">
                                Myfanwy and Kaitlin met in engineering, but didn’t become besties until med school. Their time together is mostly spent planning charity events (Monte Carlo November 24th 2018), studying at Starbucks until it closes, and going to Boston Pizza for bandera bread. Myfanwy is very proud to be from Logy Bay, and would love Kaitlin and Jacob to move there too.
                            </p>
                        </div>
                    </div>
                    <div className="left12_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={ross} alt="" title="" /></div>
                            </div>
                            <h3>ROSS MCCLEAN</h3>
                            <p className="bridalparty-story">
                                Jacob and Ross first met in high school becoming fast friends. Their shared interest in technology and goofing around really brought them together. Today their passion for innovation, entrepreneurship, and technology has kept them close. Jacob and Ross show that strong friendship has no limits. No matter the amount of time passed or distance between them  when they finally reunite Jacob and Ross can talk as if no time has passed.
                            </p>
                        </div>
                    </div>
                    <div className="left12_true">
                        <div className="small-gb">
                            <div className="about_pic_container">
                                <span className="about_picframe"></span>
                                <div className="about_pic"><img src={kayla} alt="" title="" /></div>
                            </div>
                            <h3>KAYLA CHUBBS</h3>
                            <p className="bridalparty-story">
                                Kaitlin and Kayla met in their first year of medicine and bonded over a shared hatred of biochem during their first semester of school. They now enjoy going on lunchtime walks around Long Pond (aka gossip sessions), and trying to kill each other at the gym after school.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            <div className="clear"/>
            </div>
        )
    }
}

export default BridesmaidsGroomsmen