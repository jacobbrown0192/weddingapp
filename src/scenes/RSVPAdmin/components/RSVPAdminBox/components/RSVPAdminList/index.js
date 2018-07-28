//CommentList.js
import React, { Component } from 'react';
import RSVPAdminItemBox from "./components/RSVPAdminItemBox/index";

class RSVPAdminList extends Component {

    constructor(props)
    {
        super(props);
        this.state = {data: [], rawdata: []};
        this.orderData = this.orderData.bind(this);
    }

    arrayCompare(a1, a2) {
        if(a1.length != a2.length) {
            return false;
        }
        for(var i in a1) {
            // Don't forget to check for arrays in our arrays.
            if(a1[i] instanceof Array && a2[i] instanceof Array) {
                if(!this.arrayCompare(a1[i], a2[i])) {
                    return false;
                }
            }
            else if(a1[i] != a2[i]) {
                return false;
            }
        }
        return true;
    }

    orderData()
    {
        if (this.props.data.length > 0) {
            let data = new Array();
            this.props.data.forEach(function (d) {
                if (typeof data[parseInt(d.id)] === 'undefined') {
                    data[parseInt(d.id)] = new Array();
                }
                data[parseInt(d.id)][d.num] = d;
            });
            if (!this.arrayCompare(data,this.state.data)) {
                this.setState({data: data});
            }
        }
    }

    componentDidMount()
    {
        this.orderData();
    }

    componentDidUpdate()
    {
        this.orderData();
    }

    render() {
        //TODO: fix this to work properly
        let usersNodes = this.state.data.map(data => {
            return (
                <RSVPAdminItemBox
                    data={data}
                    onRSVPDelete={ this.props.onRSVPDelete }
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
    }
}
export default RSVPAdminList;
