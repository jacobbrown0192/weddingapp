import React, { Component } from 'react';

import CommentBox from './components/CommentBox';

//TODO:Update to bootstrap
class YourStories extends Component
{
    render()
    {
        return(
            <div>
                <div>
                    <h1>Write down some stories about either of us!</h1>
                </div>
                <CommentBox url='http://localhost:3001/api/comments' pollInterval={2000} power={false} auth={this.props.Auth}/>
            </div>
        )
    }
}

export default YourStories