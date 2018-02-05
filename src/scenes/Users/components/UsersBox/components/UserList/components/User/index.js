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
    }

    deleteUser(e) {
        e.preventDefault();
        let id = this.props.uniqueId;
        this.props.onUserDelete(id);
        console.log('oops deleted');
    }

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