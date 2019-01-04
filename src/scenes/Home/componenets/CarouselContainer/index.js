import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel2'
// import 'react-owl-carousel2/lib/styles.css'
import '../../../../css/carousel.css'
import test_image from '../../../../images/image_14.jpg'
import michaela from '../../../../images/bridal_party/michaela3.jpg'
import meghan from '../../../../images/bridal_party/meghan.jpeg'
import jessa from '../../../../images/bridal_party/jessa.jpeg'
import racheal from '../../../../images/bridal_party/rachela.jpg'
import nathan from '../../../../images/bridal_party/nathan2.jpg'
import jake from '../../../../images/bridal_party/Jake.png'
import colten from '../../../../images/bridal_party/colten.jpg'
import ross from '../../../../images/bridal_party/ross2.jpg'
import dylan from '../../../../images/bridal_party/dylan2.jpg'
import douglas from '../../../../images/bridal_party/douglas2.jpg'
import josh from '../../../../images/bridal_party/josh4.jpg'
import zack from '../../../../images/bridal_party/zack3.jpg'
import jess from '../../../../images/bridal_party/Jess.jpg'
import myfanwy from '../../../../images/bridal_party/myfanwy2.jpg'
import kelsey from '../../../../images/bridal_party/Kelsey.jpg'
import kayla from '../../../../images/bridal_party/kayla.jpg'

const  options = {
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: false,
    loop: true,
    items: 4,
    nav: false,
    itemsScaleUp : true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        640:{
            items:2
        },
        979:{
            items:3
        },
        1199:{
            items:4
        }
    }
};

const events = {

}

class CarouselContrainer extends Component
{
    render()
    {
        return(
            <div className="carousel_container">
                <div className="carousel_container_image">
                    <div className="full_width_carousel">
                        <h2>OUR BRIDAL PARTY</h2>
                        <OwlCarousel ref="car" options={options} >
                            <div className="left14">
                                <img className="wh-245" src={josh} alt="" title="" /><h3>JOSHUA BARRETT</h3>
                            </div>
                            <div className="left14">
                                <img className="wh-245" src={michaela} alt="" title="" /><h3>MICHEALA QUINLAN</h3>
                            </div>
                            <div className="left14"><img className="wh-245" src={nathan} alt="" title="" /><h3>NATHAN DROVER</h3></div>
                            <div className="left14"><img className="wh-245" src={meghan} alt="" title="" /><h3>MEGHAN HUSK</h3></div>
                            <div className="left14"><img className="wh-245" src={douglas} alt="" title="" /><h3>DOUGLAS MATTHEWS</h3></div>
                            <div className="left14"><img className="wh-245" src={kelsey} alt="" title="" /><h3>KELSEY BARRETT</h3></div>
                            <div className="left14"><img className="wh-245" src={dylan} alt="" title="" /><h3>DYLAN MATTHEWS</h3></div>
                            <div className="left14"><img className="wh-245" src={jessa} alt="" title="" /><h3>JESSA VOKEY</h3></div>
                            <div className="left14"><img className="wh-245" src={zack} alt="" title="" /><h3>ZACK CHAULK</h3></div>
                            <div className="left14"><img className="wh-245" src={racheal} alt="" title="" /><h3>RACHEAL SEYMOUR</h3></div>
                            <div className="left14"><img className="wh-245" src={colten} alt="" title="" /><h3>COLTEN NORMORE</h3></div>
                            <div className="left14"><img className="wh-245" src={jess} alt="" title="" /><h3>JESS GUY</h3></div>
                            <div className="left14"><img className="wh-245" src={jake} alt="" title="" /><h3>JACOB PARSONS</h3></div>
                            <div className="left14"><img className="wh-245" src={myfanwy} alt="" title="" /><h3>MYFANWY PRICE</h3></div>
                            <div className="left14"><img className="wh-245" src={ross} alt="" title="" /><h3>ROSS MCCLEAN</h3></div>
                            <div className="left14"><img className="wh-245" src={kayla} alt="" title="" /><h3>KAYLA CHUBBS</h3></div>
                        </OwlCarousel>

                        <div className="view_all_carousel"><Link to="/bridalparty">LEARN MORE ABOUT OUR BRIDAL PARTY</Link></div>
                    </div>
                </div>
            </div>
    )
    }
}

export default CarouselContrainer