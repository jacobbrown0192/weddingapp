import React, { Component } from 'react'
import background from '../../../../images/slider/slide1.jpg'

let image = {
    marginLeft: "50%",
    transform: "translateX(-50%)",
    maxHeight: "600px"

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
                    <img style={image} src={background}/>
                </div>
            </div>
    )
    }
}

export default SliderContainer