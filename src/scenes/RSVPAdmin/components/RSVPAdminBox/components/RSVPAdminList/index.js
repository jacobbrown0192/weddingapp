//CommentList.js
import React, { Component } from 'react';
import RSVPAdminItemBox from "./components/RSVPAdminItemBox/index";

class RSVPAdminList extends Component {

    constructor(props)
    {
        super(props);
        this.state = {data: []};
        this.orderData = this.orderData.bind(this);
    }

    orderData()
    {
        let data = this.state.data;
        this.props.data.forEach(function (d) {
            data[d.id][d.num] = d;
        });
        this.setState({data: data});
    }

    componentWillMount()
    {
        this.orderData();
    }

    componentWillReceiveProps()
    {
        this.orderData();
    }

    render() {
        //TODO: fix this to work properly
        let usersNodes = this.state.data.map(data => {
            return (
                <RSVPAdminItemBox
                    userid={ this.props.userid }
                    key={this.props.userid}
                    data={data}
                    onRSVPUpdate={ this.props.onRSVPUpdate }
                    power={this.props.power}>
                </RSVPAdminItemBox>
            )
        });
        return (
            <div>
                { usersNodes }
            </div>
        )



        // let rsvpNodes = this.props.data.map(rsvp => {
        //     return (
        //         <RSVP
        //             userid={ this.props.userid }
        //             uniqueId={ rsvp['_id'] }
        //             onRSVPUpdate={ this.props.onRSVPUpdate }
        //             inputCount={rsvp.num}
        //             name= {rsvp.name}
        //             attending={rsvp.attending}
        //             food={rsvp.food}
        //             consideration={rsvp.consideration}
        //             power={this.props.power}>
        //         </RSVP>
        //     )
        // });
        // return (
        //     <div>
        //         { rsvpNodes }
        //     </div>
        // )
    }
}
export default RSVPAdminList;
