import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel2'
// import 'react-owl-carousel2/lib/styles.css'
import '../../../../css/carousel.css'
import test_image from '../../../../images/image_14.jpg'
import kelsey_matthews from '../../../../images/bridal_party/kelsey_matthews.png'
import michaela from '../../../../images/bridal_party/michaela.jpg'
import meghan from '../../../../images/bridal_party/meghan.jpeg'
import jessa from '../../../../images/bridal_party/jessa.jpeg'
import racheal from '../../../../images/bridal_party/rachela.jpg'
import nathan from '../../../../images/bridal_party/nathan.jpg'
import jake from '../../../../images/bridal_party/Jake.png'
import colten from '../../../../images/bridal_party/colten.jpg'
import ross from '../../../../images/bridal_party/ross2.jpg'


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
                        <h2>OUR BRIDESMAIDS AND GROOMSMEN</h2>
                        <OwlCarousel ref="car" options={options} >
                            <div className="left14">
                                <img className="wh-245" src={test_image} alt="" title="" /><h3>JOSHUA BARRETT</h3>
                            </div>
                            <div className="left14">
                                <img className="wh-245" src={michaela} alt="" title="" /><h3>MICHEALA QUINLAN</h3>
                            </div>
                            <div className="left14"><img className="wh-245" src={nathan} alt="" title="" /><h3>NATHAN DROVER</h3></div>
                            <div className="left14"><img className="wh-245" src={meghan} alt="" title="" /><h3>MEGHAN HUSK</h3></div>
                            <div className="left14"><img className="wh-245" src={test_image} alt="" title="" /><h3>DOUGLAS MATTHEWS</h3></div>
                            <div className="left14"><img className="wh-245" src={test_image} alt="" title="" /><h3>KARYN HOWSE</h3></div>
                            <div className="left14"><img className="wh-245" src={test_image} alt="" title="" /><h3>DYLAN MATTHEWS</h3></div>
                            <div className="left14"><img className="wh-245" src={test_image} alt="" title="" /><h3>KELSEY BARRETT</h3></div>
                            <div className="left14"><img className="wh-245" src={test_image} alt="" title="" /><h3>ZACK CHAULK</h3></div>
                            <div className="left14"><img className="wh-245" src={kelsey_matthews} alt="" title="" /><h3>KELSEY MATTHEWS</h3></div>
                            <div className="left14"><img className="wh-245" src={colten} alt="" title="" /><h3>COLTEN NORMORE</h3></div>
                            <div className="left14"><img className="wh-245" src={racheal} alt="" title="" /><h3>RACHEAL SEYMOUR</h3></div>
                            <div className="left14"><img className="wh-245" src={jake} alt="" title="" /><h3>JACOB PARSONS</h3></div>
                            <div className="left14"><img className="wh-245" src={jessa} alt="" title="" /><h3>JESSA VOKEY</h3></div>
                            <div className="left14"><img className="wh-245" src={ross} alt="" title="" /><h3>ROSS MCCLEAN</h3></div>
                            <div className="left14"><img className="wh-245" src={test_image} alt="" title="" /><h3>MYFANWY PRICE</h3></div>
                        </OwlCarousel>

                        <div className="view_all_carousel"><Link to="/bridesmaidsgroomsmen">VIEW ALL BRIDESMAIDS AND GROOMSMEN</Link></div>
                    </div>
                </div>
            </div>
    )
    }
}

export default CarouselContrainer