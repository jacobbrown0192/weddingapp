import React, { Component } from 'react';
import style from './style';
import marked from 'marked';
class User extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                toBeUpdated: false,
                password: '',
                id: ''
            };
        this.deleteUser = this.deleteUser.bind(this);
        // this.updateComment = this.updateComment.bind(this);
        // this.handleAuthorChange = this.handleAuthorChange.bind(this);
        // this.handleTextChange = this.handleTextChange.bind(this);
        // this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
    }
    //
    // updateComment(e) {
    //     e.preventDefault();
    //     this.setState({toBeUpdated: !this.state.toBeUpdated});
    // }

    // handleCommentUpdate(e) {
    //     e.preventDefault();
    //     let id = this.props.uniqueId;
    //     let author = (this.state.author) ? this.state.author : null;
    //     let text = (this.state.text) ? this.state.text : null;
    //     let comment = {author: author, text: text};
    //     this.props.onCommentUpdate(id, comment);
    //     this.setState({
    //         author: '',
    //         text: ''
    //     })
    // }

    deleteUser(e) {
        e.preventDefault();
        let id = this.props.uniqueId;
        this.props.onUserDelete(id);
        console.log('oops deleted');
    }
    //
    // handleTextChange(e) {
    //     this.setState({text: e.target.value});
    // }
    //
    // handleAuthorChange(e) {
    //     this.setState({author: e.target.value});
    // }

    rawMarkup() {
        let rawMarkup = marked(this.props.children.toString());
        return {__html: rawMarkup};
    }

    modifyComment() {
        if (this.props.power) {
            return (
                <div>
                    <a style={style.deleteLink} href='#' onClick={this.deleteUser}>delete</a>
                </div>
            )
        }
        else {
            return null
        }

    }


    render() {
        return (
            <div style={style.comment}>
                <h3>{this.props.uniqueId}</h3>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
                {this.modifyComment()}
            </div>
        );
    }
}

export default User;