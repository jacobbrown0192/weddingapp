//SongList.js
import React, {Component} from 'react';
import Song from './components/Song/index';

class SongList extends Component {
    render() {
        let songNodes = this.props.data.map(song => {
            return (
                <Song
                    artist={ song.artist }
                    uniqueId={ song['_id'] }
                    onSongDelete={ this.props.onSongDelete }
                    onSongUpdate={ this.props.onSongUpdate }
                    key={ song['_id'] }
                    power={this.props.power}>
                    { song.title}
                </Song>
            )
        })
        return (
            <ol className="commentlist">
                { songNodes }
            </ol>
        )
    }
}
export default SongList;
