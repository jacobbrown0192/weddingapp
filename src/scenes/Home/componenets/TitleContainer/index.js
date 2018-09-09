import React, { Component } from 'react'
import CircleType from 'circletype';

class TitleContainer extends Component
{
    constructor(props)
    {
        super(props)
    }

    componentDidMount() {
        this.initTextArc()
    }

    initTextArc(){
        const title = new CircleType(document.getElementById('title'));
        title.radius(250);
        const titleunder = new CircleType(document.getElementById('under_title'));
        titleunder.radius(180).dir(-1);
    }

    render()
    {
        return(
            <div className="title_container">

                <div className="title_front" id="title">WE ARE GETTING MARRIED</div>
                <div className="title">Jacob <span>&amp;</span> Kaitlin</div>
                <div className="title_date"><span className="swirl_left"><span className="swirl_right">19.07.2019</span></span></div>
                <div className="title_under" id="under_title">SAVE THE DATE</div>

            </div>

    )
    }
}

export default TitleContainer