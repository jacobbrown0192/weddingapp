import React, { Component } from 'react'
import PageHeader from "../../components/PageHeader/index";
import SongBox from "./components/SongBox/index";

const title = "SONG REQUESTS";
const header_text = "No one looks back on their life and remembers the nights they had plenty of sleep.<br />\n" +
    "Make a song request to keep the dance going all night long!";

class SongRequests extends Component
{
    render()
    {
        return(
            <div>
                <PageHeader title={title} header_text={header_text}/>
                <SongBox url='/api/songs' pollInterval={2000} power={false} auth={this.props.Auth}/>
            </div>
        )
    }
}

export default SongRequests