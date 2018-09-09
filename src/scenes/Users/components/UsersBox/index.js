import React, {Component} from 'react';
import axios from 'axios';
import UserList from './components/UserList/index';

class UsersBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], intervalId: -1 };
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
        let intervalId = setInterval(this.loadUsersFromServer, this.props.pollInterval);
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount()
    {
        clearInterval(this.state.intervalId)
    }

    render() {
        return (
            <div className="page_content">
                <div className="full_width_centered">
                    <h2>Users:</h2>
                    <UserList
                        onUserDelete={this.handleUserDelete}
                        data={ this.state.data }
                        power={ this.props.power }/>
                    <div className="clear"/>
                </div>
            </div>
        )
    }
}
export default UsersBox;