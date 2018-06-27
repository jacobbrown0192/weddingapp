//CommentList.js
import React, { Component } from 'react';
import User from './components/User/index';
import {Grid} from "react-bootstrap";

class UserList extends Component {
    render() {
        let userNodes = this.props.data.map(user => {
            return (
                <User
                    uniqueId={ user['_id'] }
                    onUserDelete={ this.props.onUserDelete }
                    key={ user['_id'] }
                    power={this.props.power}>
                    { user.password }
                </User>
            )
        })
        return (
            <Grid>
                { userNodes }
            </Grid>
        )
    }
}
export default UserList;
