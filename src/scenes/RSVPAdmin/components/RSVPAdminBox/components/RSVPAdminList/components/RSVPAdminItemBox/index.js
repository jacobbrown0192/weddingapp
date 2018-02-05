//CommentBox.js
import React, { Component } from 'react';
import axios from 'axios';
import RSVPAdminUserList from "./components/RSVPAdminUserList/index";
import RSVPAdminUserForm from "./components/RSVPAdminUserForm/index";

class RSVPAdminItemBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {data: [], url: '', lastIndex: 0};
        this.handleRsvpDelete = this.handleRsvpDelete.bind(this);
        this.handleRSVPUpdate = this.handleRSVPUpdate.bind(this);
        this.loadRSVPFromServer = this.loadRSVPFromServer.bind(this);
        this.getLastIndex = this.getLastIndex.bind(this);
    }

    loadRSVPFromServer()
    {
        axios.get(this.props.url)
            .then(res => {
                this.setState({data: res.data});
            });
    }

    handleRSVPUpdate(id, rsvp)
    {
        axios.put(`${this.props.url}/${id}`, rsvp)
            .catch(err =>
            {
                console.log(err);
            })
    }

    handleRsvpDelete(id)
    {
        axios.delete(`${this.props.url}/${id}`)
            .then(res=>
            {
                console.log('RSVP deleted');
            })
    }

    getLastIndex(data)
    {
        let index = 0;
        data.forEach(function(d){
            if (d.num > index)
            {
                index = d.num;
            }
        });
        this.setState({index: index})
    }

    componentDidMount()
    {
        this.setState({data:this.props.data});
        this.getLastIndex(this.props.data);
    }

    componentWillReceiveProps()
    {
        this.setState({data:this.props.data});
        this.getLastIndex(this.props.data);
    }

    render() {
        return (
            <div>
                <h2>User {this.props.userid}:</h2>
                <RSVPAdminUserList
                    onRSVPUpdate={this.handleRSVPUpdate}
                    onRSVPDelete={this.handleRsvpDelete}
                    data={ this.state.data }
                    power={ this.props.power }
                    userid={ this.props.userid }/>
                <RSVPAdminUserForm
                    lastIndex={this.state.index}
                    onCommentSubmit={ this.handleCommentSubmit }/>
            </div>
        )
    }
}
export default RSVPAdminItemBox;