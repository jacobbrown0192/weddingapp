//index.js
import React, {Component} from 'react';
import marked from 'marked';

const updateStyle = {
    paddingRight: "20px"
};

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                toBeUpdated: false,
                author: '',
                text: '',
                hidden: false,
                vote: 0,
            };
        this.deleteComment = this.deleteComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
    }

    updateComment(e) {
        e.preventDefault();
        this.setState({toBeUpdated: !this.state.toBeUpdated});
    }

    handleCommentUpdate(e) {
        e.preventDefault();
        let id = this.props.uniqueId;
        let author = (this.state.author) ? this.state.author : null;
        let text = (this.state.text) ? this.state.text : null;
        let comment = {author: author, text: text};
        this.props.onCommentUpdate(id, comment);
        this.setState({
            author: '',
            text: ''
        })
    }

    deleteComment(e) {
        e.preventDefault();
        let id = this.props.uniqueId;
        this.props.onCommentDelete(id);
        console.log('oops deleted');
    }

    handleTextChange(e) {
        this.setState({text: e.target.value});
    }

    handleAuthorChange(e) {
        this.setState({author: e.target.value});
    }

    rawMarkup() {
        let rawMarkup = marked(this.props.children.toString());
        return {__html: rawMarkup};
    }

    modifyComment() {
        if (this.props.power) {
            return (
                <div className="reply">
                    <a style={updateStyle} className="comment-reply-link" href='#' onClick={this.updateComment}>Update</a>
                    <a className="comment-reply-link" href='#' onClick={this.deleteComment}>Delete</a>
                </div>
            )
        }
        else {
            return null
        }

    }


    render() {
        return (
            <li>
                <div>
                    <div className="comment-author vcard">
                        <cite className="fn">{this.props.author}</cite>
                    </div>
                <p dangerouslySetInnerHTML={this.rawMarkup()}/>
                {this.modifyComment()}
                {
                    (this.state.toBeUpdated && this.props.power)
                        ? (
                            <form onSubmit={this.handleCommentUpdate}>
                                <div className="form_section">
                                    <div className="form_row_full">
                                        <label>NAME</label>
                                        <input
                                            type='text'
                                            placeholder='Your name…'
                                            className="form_input required"
                                            value={ this.state.author }
                                            onChange={ this.handleAuthorChange } />
                                    </div>
                                    <div className="form_row_full">
                                        <label>MESSAGE</label>
                                        <input
                                            type='text'
                                            placeholder='Tell us a story!'
                                            className="form_input required"
                                            value={ this.state.text }
                                            onChange={ this.handleTextChange } />
                                    </div>
                                    <div className="form_row_full">
                                        <input type="submit" name="submit" className="form_submit_contact" value="POST" />
                                    </div>
                                </div>
                            </form>
                        )
                        : null
                }
                </div>
            </li>
        );
    }
}

export default Comment;