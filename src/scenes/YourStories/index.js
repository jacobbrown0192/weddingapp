import React, { Component } from 'react';

import CommentBox from './components/CommentBox';
import PageHeader from "../../components/PageHeader/index";

const title = "YOUR STORIES";
const header_text = "We didn't know we were making memories, <br/> We just knew we were having fun.";

class YourStories extends Component
{
    render()
    {
        return(
            <div>
                <PageHeader title={title} header_text={header_text}/>
                <CommentBox url='/api/comments' pollInterval={2000} power={false} auth={this.props.Auth}/>
            </div>
        )
    }
}

export default YourStories