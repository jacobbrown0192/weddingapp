//index.js
import React, {Component} from 'react';
import marked from 'marked';

const updateStyle = {
    paddingRight: "20px"
};

class Song extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                toBeUpdated: false,
                artist: '',
                title: '',
                hidden: false,
                vote: 0,
            };
        this.deleteSong = this.deleteSong.bind(this);
        this.updateSong = this.updateSong.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSongUpdate = this.handleSongUpdate.bind(this);
    }

    updateSong(e) {
        e.preventDefault();
        this.setState({toBeUpdated: !this.state.toBeUpdated});
    }

    handleSongUpdate(e) {
        e.preventDefault();
        let id = this.props.uniqueId;
        let artist = (this.state.artist) ? this.state.artist : null;
        let title = (this.state.title) ? this.state.title : null;
        let song = {artist: artist, title: title};
        this.props.onSongUpdate(id, song);
        this.setState({
            artist: '',
            title: ''
        })
    }

    deleteSong(e) {
        e.preventDefault();
        let id = this.props.uniqueId;
        this.props.onSongDelete(id);
        console.log('oops deleted');
    }

    handleTextChange(e) {
        this.setState({text: e.target.value});
    }

    handleAuthorChange(e) {
        this.setState({author: e.target.value});
    }

    rawMarkup() {
        let rawMarkup = marked(this.props.children.toString());
        return {__html: rawMarkup};
    }

    modifySong() {
        if (this.props.power) {
            return (
                <div className="reply">
                    <a style={updateStyle} className="comment-reply-link" href='#' onClick={this.updateSong}>Update</a>
                    <a className="comment-reply-link" href='#' onClick={this.deleteSong}>Delete</a>
                </div>
            )
        }
        else {
            return null
        }

    }


    render() {
        return (
            <li>
                <div>
                        <cite className="fn">{this.props.artist}</cite>
                <p dangerouslySetInnerHTML={this.rawMarkup()}/>
                {this.modifySong()}
                {
                    (this.state.toBeUpdated && this.props.power)
                        ? (
                            <form onSubmit={this.handleSongUpdate}>
                                <div className="form_section">
                                    <div className="form_row_full">
                                        <label>ARTIST</label>
                                        <input
                                            type='text'
                                            placeholder='Artist name'
                                            className="form_input required"
                                            value={ this.state.artist }
                                            onChange={ this.handleAuthorChange } />
                                    </div>
                                    <div className="form_row_full">
                                        <label>TITLE</label>
                                        <input
                                            type='text'
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
                        : null
                }
                </div>
            </li>
        );
    }
}

export default Song;