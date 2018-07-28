import React, {Component} from 'react';
import marked from 'marked';
import axios from 'axios';

class User extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                toBeUpdated: false,
                password: '',
                id: '',
                rsvps: [],
                rsvpNames: ''
            };
        this.deleteUser = this.deleteUser.bind(this);
        this.getUserFirstName = this.getUserFirstName.bind(this)
    }

    deleteUser(e) {
        e.preventDefault();
        let id = this.props.uniqueId;
        this.props.onUserDelete(id);
        console.log('oops deleted');
    }

    rawMarkup() {
        let rawMarkup = marked(this.props.children.toString());
        return {__html: rawMarkup};
    }

    modifyComment() {
        if (this.props.power) {
            return (
                    <a href='#' className="thumb_read_more logout users" onClick={this.deleteUser}>delete</a>
            )
        }
        else {
            return null
        }

    }

    getUserFirstName() {
        axios.get(`/api/rsvp/${this.props.uniqueId}`)
            .then(res => {
                this.setState({rsvps: res.data});
                this.displayUsersNames()
            });
    }

    displayUsersNames() {
        let names = '';
        for (var rsvp of this.state.rsvps)
        {
            names += rsvp.name + ' '
        }
        this.setState({rsvpNames: names})
    }

    componentDidMount()
    {
        this.getUserFirstName()
    }

    render() {
        return (
            <div>
                <h2>{this.props.uniqueId} - {this.state.rsvpNames}</h2>
                <span className="users" dangerouslySetInnerHTML={this.rawMarkup()}/>
                {this.modifyComment()}
            </div>
        );
    }
}

export default User;