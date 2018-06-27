//CommentBox.js
import React, {Component} from 'react';
import axios from 'axios';
import RSVPList from './components/RSVPList/index';

class RSVPBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadRSVPFromServer =
            this.loadRSVPFromServer.bind(this);
        this.handleRSVPUpdate = this.handleRSVPUpdate.bind(this);
    }

    loadRSVPFromServer()
    {
        let id = {userid: this.props.userid}; //TODO: FIX USER ID, CURRENTLY SETS YOU TO LASTEST after adding through admin
        if(this.props.userid !== '') {
            axios.post(this.props.url, id)
                .then(res => {
                    this.setState({data: res.data});
                });
        }
    }

    handleRSVPUpdate(id, rsvp)
    {
        axios.put(`${this.props.url}/${id}`, rsvp)
            .catch(err =>
            {
                console.log(err);
            })
    }

    componentDidMount()
    {
        this.loadRSVPFromServer();
        // setInterval(this.loadRSVPFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <div className="page_content">
                <div className="full_width_centered">
                <RSVPList
                    onRSVPUpdate={this.handleRSVPUpdate}
                    data={ this.state.data }
                    power={ this.props.power }
                    userid={ this.props.userid }/>
                <div className="clear"></div>
                </div>
            </div>
        )
    }
}
export default RSVPBox;