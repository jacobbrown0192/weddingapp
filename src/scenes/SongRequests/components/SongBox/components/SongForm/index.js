//SongForm.js
import React, {Component} from 'react';

const formStyle = {
    display: 'flex'
}

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { artist: '', title: '' };
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAuthorChange(e) {
        this.setState({ artist: e.target.value });
    }
    handleTextChange(e) {
        this.setState({ title: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        let artist = this.state.artist.trim();
        let title = this.state.title.trim();
        if(!title || !artist)
        {
            return;
        }
        this.props.onSongSubmit(this.createNewSong(title, artist));
        this.setState({ artist: '', title: ''});
        console.log('${this.state.artist} said "${this.state.title}"')
        //we will be tying this into the POST method in a bit
    }

    createNewSong(title, artist)
    {
        return this.createSong(title,artist,false,0)
    }

    createSong(title, artist, hidden, votes)
    {
        var song = {
           artist: artist,
           title: title,
           hidden: hidden,
           votes: votes
        };
        return song;
    }

    render() {
        return (
            <form style={formStyle} onSubmit={ this.handleSubmit }>
                <div className="form_section">
                    <div className="form_row_full">
                        <label>ARTIST</label>
                        <input
                            type='title'
                            placeholder='Artist name'
                            className="form_input required"
                            value={ this.state.artist }
                            onChange={ this.handleAuthorChange } />
                    </div>
                    <div className="form_row_full">
                        <label>TITLE</label>
                        <input
                            type='title'
                            placeholder='Song title'
                            className="form_input required"
                            value={ this.state.title }
                            onChange={ this.handleTextChange } />
                    </div>
                    <div className="form_row_full">
                        <input type="submit" name="submit" className="form_submit_contact" value="POST" />
                    </div>
                </div>
            </form>
        )
    }
}
export default SongForm;