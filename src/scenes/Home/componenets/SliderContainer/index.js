import React, { Component } from 'react'
import background from '../../../../images/cover/IMG_8766.jpg'

let image = {


}

let imageContainer = {
    overflow: "hidden"
}

class SliderContainer extends Component
{
    render()
    {
        return(
            <div className="slider_container">
                <div className="slider_trans_black"></div>
                <div style={imageContainer} id="random">
                    <img className="slider-image" src={background}/>
                </div>
            </div>
    )
    }
}

export default SliderContainer