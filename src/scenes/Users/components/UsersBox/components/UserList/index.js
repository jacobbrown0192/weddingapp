//CommentList.js
import React, { Component } from 'react';
import User from './components/User/index';
import style from './style';

class UserList extends Component {
    render() {
        let commentNodes = this.props.data.map(user => {
            return (
                <User
                    uniqueId={ user['_id'] }
                    onUserDelete={ this.props.onUserDelete }
                    // onCommentUpdate={ this.props.onCommentUpdate }
                    key={ user['_id'] }
                    power={this.props.power}>
                    { user.password }
                </User>
            )
        })
        return (
            <div style={ style.commentList }>
                { commentNodes }
            </div>
        )
    }
}
export default UserList;
