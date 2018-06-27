//CommentList.js
import React, {Component} from 'react';
import Comment from './components/Comment/index';

class CommentList extends Component {
    render() {
        let commentNodes = this.props.data.map(comment => {
            return (
                <Comment
                    author={ comment.author }
                    uniqueId={ comment['_id'] }
                    onCommentDelete={ this.props.onCommentDelete }
                    onCommentUpdate={ this.props.onCommentUpdate }
                    key={ comment['_id'] }
                    power={this.props.power}>
                    { comment.text}
                </Comment>
            )
        })
        return (
            <ol className="commentlist">
                { commentNodes }
            </ol>
        )
    }
}
export default CommentList;
