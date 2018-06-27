import React, { Component } from 'react'
import PageHeader from "../../components/PageHeader/index";

const title = "SCHEDULE";
const header_text = "See the plan for the day!";

class Schedule extends Component
{
    render()
    {
        return(
            <div>
                <PageHeader title={title} header_text={header_text}/>
            </div>
        )
    }
}

export default Schedule