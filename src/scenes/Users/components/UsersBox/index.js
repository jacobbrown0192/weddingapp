//CommentBox.js
import React, { Component } from 'react';
import axios from 'axios';
import UserList from './components/UserList/index';
import style from './style';

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
        axios.get(this.props.url)
            .then(res =>
            {
                this.setState({data:res.data });
            });
        console.log(this.state.data);
    }

    handleUserDelete(id)
    {
        axios.delete(`${this.props.url}/${id}`)
            .then(res=>
            {
                console.log('User deleted');
            })
    }

    componentDidMount()
    {
        this.loadUsersFromServer();
        setInterval(this.loadUsersFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <div style={ style.commentBox }>
                <h2>Users:</h2>
                <UserList
                    onUserDelete={this.handleUserDelete}
                    data={ this.state.data }
                    power={ this.props.power }/>
            </div>
        )
    }
}
export default UsersBox;