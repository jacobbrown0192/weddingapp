import React, { Component } from 'react'
import PageHeader from "../../components/PageHeader/index";

const title = "404 - PAGE NOT FOUND";
const header_text = "";

class PageNotFound extends Component
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

export default PageNotFound