import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Col, Row, Button, PageHeader} from 'react-bootstrap';
import axios from 'axios';
import DynamicRSVPInputs from "../../../../../../../../../RSVPAddPage/components/DynamicRSVPInputs/index";

class RSVPAdminUserForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {userid: -1, rsvp: [], finished: false, inputCount: 0, lastIndex: 0 };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.addInput = this.addInput.bind(this);
        this.handleRSVPInputs = this.handleRSVPInputs.bind(this);
    }

    handleRSVPInputs(r)
    {
        const rsvp = this.state.rsvp;
        let rsvpItem = this.createRsvp(r);
        rsvp[r.num] = rsvpItem;
        this.setState(rsvp)
    }

    createRsvp(r)
    {
        let rsvp = {
            num: r.num,
            name: r.name,
            attending: r.attending,
            food: r.food,
            consideration: r.consideration,
        };
        return rsvp
    }

    createRsvpDTO(r)
    {
        let rsvpDTO =
            {
                rsvp: this.state.rsvp,
                userid: this.state.userid,
                number: this.state.inputCount
            };
        return rsvpDTO
    }

    onChange(e)
    {
        return this.setState({[e.target.name]: e.target.value});
    }

    //TODO Test this, esp. the RSVP list
    onSave(event) {
        event.preventDefault();
        if (this.state.rsvp.length > 0)
        {
            var rsvpDTO = this.createRsvpDTO();
            axios.post('http://localhost:3001/api/rsvpadd', rsvpDTO)
                .catch(err => {
                    console.error(err);
                });
            this.setState({rsvp:[], inputCount:0});
        }
    }

    onDelete(event) {
        //TODO: delete all rsvps and user
        event.preventDefault();
    }

    createEmptyRsvp(c)
    {
        let rsvp = {
            num: c,
            name: '',
            attending: false,
            food: 'chicken',
            consideration: ''
        };
        return rsvp;
    }

    addInput()
    {
        let count = this.state.inputCount;
        let tempRsvp = this.createEmptyRsvp(count + this.state.lastIndex + 1); //This is iffy
        this.handleRSVPInputs(tempRsvp);
        this.setState({inputCount: count+1})
    }

    componentWillMount()
    {
        this.setState({userid: this.props.userid});
        this.setState({lastIndex: this.props.lastIndex});
    }

    componentDidUpdate()
    {
        if(this.props.userid !== this.state.userid) {
            this.setState({userid: this.props.userid});
        }

        if(this.props.lastIndex !== this.state.lastIndex) {
            this.setState({lastIndex: this.props.lastIndex});
        }
    }

    render()
    {
        let inputs = [];

        for (var i = 1; i <= this.state.inputCount; i++)
        {
            inputs.push(<DynamicRSVPInputs rsvpValues={this.state.rsvp[this.state.lastIndex + i]} userid={this.props.userid} key={this.state.lastIndex + i} num={this.state.lastIndex + i} handleRSVPInputs={this.handleRSVPInputs} />)
        }
        return (
            < div>
                < form class = "form-group">
                    <FormGroup>
                        {inputs}
                    </FormGroup>

                    <Col sm={1}>
                        <Button
                            bsStyle="primary"
                            type="button"
                            onClick={this.addInput}>
                            +
                        </Button>
                    </Col>
                    <Col sm={1}>
                        < Button
                            bsStyle="primary"
                            type="submit"
                            onClick={this.onSave}>
                            Submit
                        </Button>
                    </Col>
                    <Col sm={1}>
                        < Button
                            bsStyle="primary"
                            type="submit"
                            onClick={this.onDelete}>
                            Delete
                        </Button>
                    </Col>
                </form>
                <Row/>
            </div>
        );
    }
}

export default RSVPAdminUserForm;