//CommentBox.js
import React, { Component } from 'react';
import axios from 'axios';
import RSVPAdminUserList from "./components/RSVPAdminUserList/index";
import RSVPAdminUserForm from "./components/RSVPAdminUserForm/index";

class RSVPAdminItemBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {data: [], url: '/api/rsvp', lastIndex: 0, userid: -1};
        this.handleRsvpDelete = this.handleRsvpDelete.bind(this);
        this.handleRSVPUpdate = this.handleRSVPUpdate.bind(this);
        this.loadRSVPFromServer = this.loadRSVPFromServer.bind(this);
        this.getLastIndex = this.getLastIndex.bind(this);
        this.getUserId = this.getUserId.bind(this);
    }

    loadRSVPFromServer()
    {
        axios.get(this.state.url)
            .then(res => {
                this.setState({data: res.data});
            });
    }

    handleRSVPUpdate(id, rsvp)
    {
        axios.put(`${this.state.url}/${id}`, rsvp)
            .catch(err =>
            {
                console.log(err);
            })
    }

    //TODO: on delete reload data.
    handleRsvpDelete(id)
    {
        axios.delete(`${this.state.url}/${id}`)
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
        if(index !== this.state.index) {
            this.setState({index: index})
        }
    }

    getUserId(data)
    {
        for(let d of data)
        {
            if(d) {
                if (parseInt(d.id) !== this.state.userid) {
                    this.setState({userid: parseInt(d.id)});
                }
                break;
            }
        }
    }

    componentDidMount()
    {
        this.setState({data:this.props.data});
        this.getLastIndex(this.props.data);
        this.getUserId(this.props.data);
    }

    componentDidUpdate()
    {
        if(this.props.data !== this.state.data) {
            this.setState({data: this.props.data});
        }
        this.getLastIndex(this.props.data);
        this.getUserId(this.props.data);
    }

    render() {
        return (
            <div>
                <h2>User {this.state.userid}:</h2>
                <RSVPAdminUserList
                    onRSVPUpdate={this.handleRSVPUpdate}
                    onRSVPDelete={this.handleRsvpDelete}
                    data={ this.state.data }
                    power={ this.props.power }
                    userid={ this.state.userid }/>
                <RSVPAdminUserForm
                    lastIndex={this.state.index}
                    onCommentSubmit={ this.handleCommentSubmit }
                    userid={this.state.userid}/>
            </div>
        )
    }
}
export default RSVPAdminItemBox;