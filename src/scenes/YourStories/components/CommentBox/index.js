//CommentBox.js
import React, {Component} from 'react';
import axios from 'axios';
import CommentList from './components/CommentList/index';
import CommentForm from './components/CommentForm/index';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], power: false, intervalId: -1 };
        this.loadCommentsFromServer =
            this.loadCommentsFromServer.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleCommentDelete = this.handleCommentDelete.bind(this);
        this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
        this.isPower = this.isPower.bind(this);
    }

    loadCommentsFromServer()
    {
        axios.get(this.props.url)
            .then(res =>
            {
                this.setState({data:res.data });
            });
        console.log(this.state.data);
    }

    handleCommentSubmit(comment)
    {
        //add Post Request
        let comments = this.state.data;
        let newComments = comments.concat([comment])
        this.setState({ data: newComments });
        axios.post(this.props.url, comment)
            .catch(err=>
            {
                console.error(err);
                this.setState({ data: comments });
            })
    }

    handleCommentDelete(id)
    {
        axios.delete(`${this.props.url}/${id}`)
            .then(res=>
            {
                console.log('User deleted');
            })
    }

    handleCommentUpdate(id, comment)
    {
        axios.put(`${this.props.url}/${id}`, comment)
            .catch(err =>
            {
                console.log(err);
            })
    }

    isPower()
    {
        if (this.props.auth > 1)
        {
            this.setState({power: true})
        }
    }

    componentDidMount()
    {
        this.loadCommentsFromServer();
        this.isPower();
        let intervalId = setInterval(this.loadCommentsFromServer, this.props.pollInterval);
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
                    <CommentList
                        onCommentDelete={this.handleCommentDelete}
                        onCommentUpdate={this.handleCommentUpdate}
                        data={ this.state.data }
                        power={ this.state.power }/>
                    <CommentForm onCommentSubmit={ this.handleCommentSubmit }/>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}
export default CommentBox;