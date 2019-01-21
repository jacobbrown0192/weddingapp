//index.js
import React, {Component} from 'react';


class RSVPAdminItem extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                userid: -1,
                num: 0,
                name: '',
                attending: 0,
                food: '',
                consideration: ''
            };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.updateRsvp = this.updateRsvp.bind(this);
        this.deleteRsvp = this.deleteRsvp.bind(this);
        this.setStateBasedOnProps = this.setStateBasedOnProps.bind(this);
    }

    updateRsvp()
    {
        this.props.onRSVPUpdate(this.props.uniqueId, this.state);
    }

    deleteRsvp()
    {
        this.props.onRSVPDelete(this.props.uniqueId);
    }

    handleOnChange(e)
    {
        e.preventDefault();
        let state = this.state;
        state[e.target.name]= e.target.value;
        this.setState({[e.target.name]: e.target.value});
        this.props.onRSVPUpdate(this.props.uniqueId, state);
    }

    setStateBasedOnProps()
    {
        this.setState({userid: this.props.userid, num: this.props.num, name: this.props.name,
            attending: this.props.attending, food: this.props.food, consideration: this.props.consideration })
    }

    componentWillMount()
    {
        this.setStateBasedOnProps();
    }

    componentWillReceiveProps()
    {
        this.setStateBasedOnProps();
    }

    render() {
        return(
            <div className="form_section">
                <div className="form_row_full">
                    <label>
                        Name:
                    </label>
                    <input
                        name="name"
                        label="name"
                        type="text"
                        className="form_input required"
                        value={this.state.name}
                        onChange={this.handleOnChange}/>
                </div>
                <div className="form_row left12_first">
                    <label>
                        ATTENDING?
                    </label>
                    <div className="select_container">
                        <select
                            name="attending"
                            label="attending"
                            value={this.state.attending}
                            onChange={this.handleOnChange}
                            className="form_select">
                            <option value={0}>-</option>
                            <option value={1}>Both Ceremony and Reception</option>
                            <option value={2}>Ceremony Only</option>
                            <option value={3}>Reception Only</option>
                            <option value={4}>No</option>
                        </select>
                    </div>
                </div>
                <div className="form_row left12_last">
                    <label>
                        MEAL
                    </label>
                    <div className="select_container">
                        <select
                            name="food"
                            label="food"
                            value={this.state.food}
                            onChange={this.handleOnChange}
                            className="form_select">
                            <option value="chicken">Chicken</option>
                            <option value="vegetarian">Vegetarian</option>
                        </select>
                    </div>
                </div>
                <div className="form_row_full">
                    <label>OTHER COMMENTS</label>
                    <input
                        name="consideration"
                        label="consideration"
                        type="text"
                        value={this.state.consideration}
                        className="form_input required"
                        onChange={this.handleOnChange}/>
                </div>
                <div className="form_row">
                    <input
                        type="button"
                        onClick={this.updateRsvp}
                        className="form_submit_contact"
                        value="SAVE">
                    </input>
                </div>
                <div className="form_row">
                    <input
                        type="button"
                        onClick={this.deleteRsvp}
                        className="form_submit_contact"
                        value="DELETE">
                    </input>
                </div>
            </div>
        );
    }
}

export default RSVPAdminItem;