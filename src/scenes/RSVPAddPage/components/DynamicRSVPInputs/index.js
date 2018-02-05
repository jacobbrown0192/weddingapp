import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Col, Row} from 'react-bootstrap';

class DynamicRSVPInputs extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {userid: -1, num: 0,
            name: '',
            attending: false,
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
        this.setState({userid: this.props.userid})
    }

    render()
    {
        return(
            <div>
                <FormGroup>
                <Col sm={2}>
                    <ControlLabel>
                        Name:
                    </ControlLabel>
                </Col>
                <Col sm={10}>
                    < FormControl
                    name="name"
                    label="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.onChange}/>
                </Col>
                </FormGroup>
                <FormGroup>
                <Col sm={2}>
                    <ControlLabel>
                        Attending?:
                    </ControlLabel>
                </Col>
                <Col sm={10}>
                    <FormControl
                    name="attending"
                    label="attending"
                    value={this.state.rsvp}
                    onChange={this.onChange}
                    componentClass="select">
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                    </FormControl>
                </Col>
                </FormGroup>
                <FormGroup>
                <Col sm={2}>
                    <ControlLabel>
                        Food:
                    </ControlLabel>
                </Col>
                <Col sm={10}>
                    <FormControl
                    name="food"
                    label="food"
                    value={this.state.food}
                    onChange={this.onChange}
                    componentClass="select">
                        <option value="beef">Beef</option>
                        <option value="chicken">Chicken</option>
                        <option value="vegetarian">Vegetarian</option>
                    </FormControl>
                </Col>
                </FormGroup>

                <FormGroup>
                <Col sm={2}>
                    <ControlLabel>
                        Considerations:
                    </ControlLabel>
                </Col>
                <Col sm={10}>
                    < FormControl
                    name="consideration"
                    label="consideration"
                    type="text"
                    value={this.state.consideration}
                    onChange={this.onChange}/>
                </Col>
                </FormGroup>
                <Row/>
            </div>
        )
    }

}

export default DynamicRSVPInputs;