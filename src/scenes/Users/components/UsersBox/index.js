//CommentBox.js
import React, { Component } from 'react';
import axios from 'axios';
import UserList from './components/UserList/index';
import style from './style';
import {Grid} from "react-bootstrap";

class UsersBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadUsersFromServer =
            this.loadUsersFromServer.bind(this);
        this.handleUserDelete = this.handleUserDelete.bind(this);
    }

    loadUsersFromServer()
    {
        //TODO: Load name of first rsvp? maybe??
        axios.get(this.props.url)
            .then(res =>
            {
                this.setState({data:res.data });
            });
    }

    handleUserDelete(id)
    {
        //TODO: When deleting user delete RSVP stuffs
        axios.delete(`/api/user/${id}`)
            .then(res=>
            {
            })
    }

    componentDidMount()
    {
        this.loadUsersFromServer();
        setInterval(this.loadUsersFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <Grid>
                <h2>Users:</h2>
                <UserList
                    onUserDelete={this.handleUserDelete}
                    data={ this.state.data }
                    power={ this.props.power }/>
            </Grid>
        )
    }
}
export default UsersBox;