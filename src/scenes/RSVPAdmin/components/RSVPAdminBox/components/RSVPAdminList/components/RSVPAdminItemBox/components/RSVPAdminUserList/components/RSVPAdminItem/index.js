//index.js
import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Col, Row, Button} from 'react-bootstrap';


class RSVPAdminItem extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                userid: -1,
                num: 0,
                name: '',
                attending: false,
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
                            onChange={this.handleOnChange}/>
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
                            value={this.state.attending}
                            onChange={this.handleOnChange}
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
                            onChange={this.handleOnChange}
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
                            onChange={this.handleOnChange}/>
                    </Col>
                </FormGroup>
                <Col sm={1}>
                    <Button
                        bsStyle="primary"
                        type="button"
                        onClick={this.updateRsvp}>
                        Save
                    </Button>
                </Col>
                <Col sm={1}>
                    <Button
                        bsStyle="primary"
                        type="button"
                        onClick={this.deleteRsvp}>
                        Delete
                    </Button>
                </Col>
                <Row/>
            </div>
        );
    }
}

export default RSVPAdminItem;