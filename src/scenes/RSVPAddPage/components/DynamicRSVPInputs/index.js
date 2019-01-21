import React, {Component} from 'react';

class DynamicRSVPInputs extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {userid: -1, num: 0,
            name: '',
            attending: 0,
            food: '',
            consideration: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e)
    {
        e.preventDefault();
        let state = this.state;
        state[e.target.name]= e.target.value;
        this.setState({[e.target.name]: e.target.value});
        this.props.handleRSVPInputs(state);
    }

    componentWillMount()
    {
        this.setState(this.props.rsvpValues);
        this.setState({userid: this.props.userid});
        this.setState({num: this.props.num});
    }

    render()
    {
        return(            <div className="form_section">
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
                    onChange={this.onChange}/>
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
                        onChange={this.onChange}
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
                        onChange={this.onChange}
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
                    onChange={this.onChange}/>
            </div>
        </div>        )
    }

}

export default DynamicRSVPInputs;