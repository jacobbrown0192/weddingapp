//CommentBox.js
import React, { Component } from 'react';
import axios from 'axios';
import UserList from './components/UserList/index';
// import CommentForm from './components/CommentForm/index';
import style from './style';

class UsersBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadUsersFromServer =
            this.loadUsersFromServer.bind(this);
        // this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleUserDelete = this.handleUserDelete.bind(this);
        // this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
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

    // handleCommentSubmit(comment)
    // {
    //     //add Post Request
    //     let comments = this.state.data;
    //     let newComments = comments.concat([comment])
    //     this.setState({ data: newComments });
    //     axios.post(this.props.url, comment)
    //         .catch(err=>
    //         {
    //             console.error(err);
    //             this.setState({ data: comments });
    //         })
    // }

    handleUserDelete(id)
    {
        axios.delete(`${this.props.url}/${id}`)
            .then(res=>
            {
                console.log('User deleted');
            })
    }

    // handleCommentUpdate(id, comment)
    // {
    //     axios.put(`${this.props.url}/${id}`, comment)
    //         .catch(err =>
    //         {
    //             console.log(err);
    //         })
    // }

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
                    // onCommentUpdate={this.handleCommentUpdate}
                    data={ this.state.data }
                    power={ this.props.power }/>
                {/*<CommentForm onCommentSubmit={ this.handleCommentSubmit }/>*/}
            </div>
        )
    }
}
export default UsersBox;