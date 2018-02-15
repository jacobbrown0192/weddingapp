import React, { Component } from 'react';
import axios from 'axios';
import RSVPAdminForm from "./components/RSVPAdminForm/index";
import RSVPAdminList from "./components/RSVPAdminList/index";

class RSVPAdminBox extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {data: []};
        this.handleRsvpDelete = this.handleRsvpDelete.bind(this);
        this.handleRSVPUpdate = this.handleRSVPUpdate.bind(this);
        this.loadRSVPFromServer = this.loadRSVPFromServer.bind(this);
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

    componentDidMount()
    {
        this.loadRSVPFromServer();
        // setInterval(this.loadRSVPFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <div>
                <h2>RSVPs:</h2>
                <RSVPAdminList
                    onRSVPUpdate={this.handleRSVPUpdate}
                    data={ this.state.data }
                    power={ this.props.power }/>
                <RSVPAdminForm onCommentSubmit={ this.handleCommentSubmit }/>
            </div>
        )
    }
}

export default RSVPAdminBox;