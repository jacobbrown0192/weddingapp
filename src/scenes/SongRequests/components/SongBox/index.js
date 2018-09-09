//SongBox.js
import React, {Component} from 'react';
import axios from 'axios';
import SongList from "./components/SongList/index";
import SongForm from "./components/SongForm/index";

class SongBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], power: false, intervalId: -1 };
        this.loadSongsFromServer =
            this.loadSongsFromServer.bind(this);
        this.handleSongSubmit = this.handleSongSubmit.bind(this);
        this.handleSongDelete = this.handleSongDelete.bind(this);
        this.handleSongUpdate = this.handleSongUpdate.bind(this);
        this.isPower = this.isPower.bind(this);
    }

    loadSongsFromServer()
    {
        axios.get(this.props.url)
            .then(res =>
            {
                this.setState({data:res.data });
            });
        console.log(this.state.data);
    }

    handleSongSubmit(song)
    {
        //add Post Request
        let songs = this.state.data;
        let newSongs = songs.concat([song])
        this.setState({ data: newSongs });
        axios.post(this.props.url, song)
            .catch(err=>
            {
                console.error(err);
                this.setState({ data: songs });
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
    }

    componentWillUnmount()
    {
        clearInterval(this.state.intervalId)
    }

    render() {
        return (
            <div className="page_content">
                <div className="full_width_centered">
                    <SongForm onSongSubmit={ this.handleSongSubmit }/>
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