import React, { Component } from 'react'
import TitleContainer from "./componenets/TitleContainer/index";
import SliderContainer from "./componenets/SliderContainer/index";
import AboutContent from "./componenets/AboutContent/index";
import CarouselContrainer from "./componenets/CarouselContainer/index";
import '../../style.css';
import '../../colors/blue.css';
import CountdownContainer from "./componenets/CountdownContainer/index";

class Home extends Component
{
    // let deadine = 'July 19 2019 13:00:00 GMT-0330';
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <TitleContainer/>
                <SliderContainer/>
                <CountdownContainer/>
                <AboutContent/>
                <CarouselContrainer/>
            </div>
        )
    }
}

export default Home