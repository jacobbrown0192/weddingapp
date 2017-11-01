//CommentBox.js
import React, { Component } from 'react';
import CommentList from './components/CommentList/index';
import CommentForm from './components/CommentForm/index';
import DATA from '../data';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    render() {
        return (
            <div style={ style.commentBox }>
                <h2>Comments:</h2>
                <CommentList data={ DATA }/>
                <CommentForm />
            </div>
        )
    }
}
export default CommentBox;