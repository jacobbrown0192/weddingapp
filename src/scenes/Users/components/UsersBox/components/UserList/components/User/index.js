import React, { Component } from 'react';
import marked from 'marked';
import {Grid, Row} from "react-bootstrap";
class User extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                toBeUpdated: false,
                password: '',
                id: ''
            };
        this.deleteUser = this.deleteUser.bind(this);
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
                <Grid>
                    <a href='#' onClick={this.deleteUser}>delete</a>
                </Grid>
            )
        }
        else {
            return null
        }

    }


    render() {
        return (
            <Row>
                <h3>{this.props.uniqueId}</h3>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
                {this.modifyComment()}
            </Row>
        );
    }
}

export default User;