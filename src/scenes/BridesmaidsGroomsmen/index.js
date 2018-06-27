import React, {Component} from 'react'
import PageHeader from "../../components/PageHeader/index";
import '../../colors/blue.css';
import '../../style.css';
import test_image from '../../images/image_14.jpg'
import kelsey_matthews from ' ../../images/bridal_party/kelsey_matthews.png'
import michaela from ' ../../images/bridal_party/michaela.jpg'
import meghan from ' ../../images/bridal_party/meghan.jpeg'
import jessa from ' ../../images/bridal_party/jessa.jpeg'
import racheal from ' ../../images/bridal_party/rachela.jpg'
import nathan from ' ../../images/bridal_party/nathan.jpg'
import jake from ' ../../images/bridal_party/Jake.png'
import colten from ' ../../images/bridal_party/colten.jpg'
import ross from ' ../../images/bridal_party/ross2.jpg'

const title = "Bridesmaids And Groomsmen";
const header_text = "Love is friendship that has caught fire. It is quiet understanding, sharing and forgiving. <br />\n" +
    "It is loyalty through good and bad times. It settles for less than perfection<br /> and makes allowances for human weaknesses.\n" +
    "<br /> <em>\"Répondez s'il vous plaît.\"</em>";

class BridesmaidsGroomsmen extends Component
{
    render()
    {
        return(
            <div>
                <PageHeader title={title} header_text={header_text}/>
                <div className="page_content">
                    <div className="full_width_centered">
                    <div className="left12_true">
                        <div className="large-gb">
                            <img className="large-gb-images" src={test_image} alt="" title="" /><
                            h3>JOSHUA BARRETT</h3>
                        </div>
                    </div>
                    <div className="left12_true">
                        <div className="large-gb">
                            <img className="large-gb-images" src={michaela} alt="" title="" />
                            <h3>MICHEALA QUINLAN</h3>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={nathan} alt="" title="" />
                            <h3>NATHAN DROVER</h3>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={meghan} alt="" title="" />
                            <h3>MEGHAN HUSK</h3>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={test_image} alt="" title="" />
                            <h3>DOUGLAS MATTHEWS</h3>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={test_image} alt="" title="" />
                            <h3>KARYN HOWSE</h3>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={test_image} alt="" title="" />
                            <h3>DYLAN MATTHEWS</h3>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={test_image} alt="" title="" />
                            <h3>KELSEY BARRETT</h3>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={test_image} alt="" title="" />
                            <h3>ZACK CHAULK</h3>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={kelsey_matthews} alt="" title="" />
                            <h3>KELSEY MATTHEWS</h3>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={colten} alt="" title="" />
                            <h3>COLTEN NORMORE</h3>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={racheal} alt="" title="" />
                            <h3>RACHEAL SEYMOUR</h3>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={jake} alt="" title="" />
                            <h3>JACOB PARSONS</h3>
                        </div>
                    </div>
                    <div className="left14_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={jessa} alt="" title="" />
                            <h3>JESSA VOKEY</h3>
                        </div>
                    </div>
                    <div className="left12_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={ross} alt="" title="" />
                            <h3>ROSS MCCLEAN</h3>
                        </div>
                    </div>
                    <div className="left12_true">
                        <div className="small-gb">
                            <img className="small-gb-images" src={test_image} alt="" title="" />
                            <h3>MYFANWY PRICE</h3>
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