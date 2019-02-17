//SongBox.js
import React, {Component} from 'react';
import axios from 'axios';
import SongList from "./components/SongList/index";
import SongForm from "./components/SongForm/index";
import {Alert} from "react-bootstrap";

class SongBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], power: false, intervalId: -1, message: false, displayMessage: '' };
        this.loadSongsFromServer =
            this.loadSongsFromServer.bind(this);
        this.handleSongSubmit = this.handleSongSubmit.bind(this);
        this.handleSongDelete = this.handleSongDelete.bind(this);
        this.handleSongUpdate = this.handleSongUpdate.bind(this);
        this.handleDismiss = this.handleDismiss.bind(this);
        this.isPower = this.isPower.bind(this);
    }

    loadSongsFromServer()
    {
        axios.get(this.props.url)
            .then(res =>
            {
                this.setState({data:res.data });
            });
    }

    handleSongSubmit(song)
    {
        //add Post Request
        axios.post(this.props.url, song)
            .then(res =>
            {
                this.setState({ message: true });
                this.setState({ displayMessage: res.data.message + ' ' + res.data.title + ' by ' + res.data.artist})

                if (res.data.add === true) {
                    let songs = this.state.data;
                    song.artist = res.data.artist;
                    song.title = res.data.title;
                    let newSongs = songs.concat([song]);
                    this.setState({ data: newSongs });
                }
            })
            .catch(err=>
            {
                console.error(err);
            })
    }

    handleSongDelete(id)
    {
        axios.delete(`${this.props.url}/${id}`)
            .then(res=>
            {
                console.log('User deleted');
            })
    }

    handleSongUpdate(id, song)
    {
        axios.put(`${this.props.url}/${id}`, song)
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
        this.loadSongsFromServer();
        this.isPower();
        let intervalId = setInterval(this.loadSongsFromServer, this.props.pollInterval);
        this.setState({intervalId: intervalId});
        this.setState({ message: false });
    }

    componentWillUnmount()
    {
        clearInterval(this.state.intervalId)
    }

    songUpdateMessage()
    {
        if (this.state.message) {
            return (
                <Alert bsStyle="success" onDismiss={this.handleDismiss}>{this.state.displayMessage}</Alert>
            )
        }
        else {
            return null
        }
    }

    handleDismiss() {
        this.setState({ message: false });
    }

    render() {
        return (
            <div className="page_content">
                <div className="full_width_centered">
                    <SongForm onSongSubmit={ this.handleSongSubmit }/>
                    {this.songUpdateMessage()}
                    <SongList
                        onSongDelete={this.handleSongDelete}
                        onSongUpdate={this.handleSongUpdate}
                        data={ this.state.data }
                        power={ this.state.power }/>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}
export default SongBox;