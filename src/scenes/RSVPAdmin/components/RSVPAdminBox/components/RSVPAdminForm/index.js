import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Col, Row, Button, PageHeader} from 'react-bootstrap';
import axios from 'axios';
import DynamicRSVPInputs from "../../../../../RSVPAddPage/components/DynamicRSVPInputs/index";
import niceware from '../../../../../../utils/niceware/lib/main';

const PASSWORD_SEPERATOR = '.';

class RSVPAdminForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {userid: -1, rsvp: [], finished: false, inputCount: 0, password: '', access: 0 };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
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

    createRsvpDTOwithUser(user)
    {
        let rsvpDTO =
            {
                rsvp: this.state.rsvp,
                userid: user._id,
                number: this.state.inputCount
            };
        return rsvpDTO
    }

    onChange(e)
    {
        return this.setState({[e.target.name]: e.target.value});
    }

    onSave(event) {
        event.preventDefault();
        if (this.state.rsvp.length > 0)
        {
            let password = this.autoGeneratePassword();
            if (this.state.password)
            {
                password = this.state.password;
            }
            var user = this.createUser(password, 1);
            axios.post('/api/signup', user)
                .catch(err => {
                    console.error(err);
                })
                .then(function(res){
                    let user = res.data;
                    let rsvpDTO = this.createRsvpDTOwithUser(user);
                    axios.post('/api/rsvpadd', rsvpDTO)
                        .catch(err => {
                            console.error(err);
                        });
                    this.setState({rsvp:[], inputCount:0, password: '', access: 0});
                }.bind(this));
        }
    }

    autoGeneratePassword()
    {
        let passphraseArray = niceware.generatePassphrase(8);
        var passphrase = "";
        for (var i = 0, len = passphraseArray.length; i<len; i++){
            passphrase += passphraseArray[i];
            if(i+1 !== len) {
                passphrase += PASSWORD_SEPERATOR;
            }
        }
        return passphrase
    }

    createUser(password, access)
    {
        let user = {
            password: password,
            access: access
        };
        return user;
    }

    createEmptyRsvp(c)
    {
        let rsvp = {
            num: c,
            name: '',
            attending: 0,
            food: 'chicken',
            consideration: ''
        };
        return rsvp;
    }

    addInput()
    {
        let count = this.state.inputCount;
        let tempRsvp = this.createEmptyRsvp(count);
        this.handleRSVPInputs(tempRsvp);
        this.setState({inputCount: count+1})
    }

    componentWillMount()
    {
        this.setState({userid: this.props.userid})
    }

    render()
    {
        let inputs = [];

        for (var i = 0; i < this.state.inputCount; i++)
        {
            inputs.push(<DynamicRSVPInputs rsvpValues={this.state.rsvp[i]} userid={this.props.userid} key={i} num={i} handleRSVPInputs={this.handleRSVPInputs} />)
        }
        return (

            <div className="form_content">
                <h3 className="form_toptitle" id="Note">Add Guest</h3>
                <form>
                    <div className="form_section">
                        <div className="form_row_full">
                        {/*TODO: add signup right here rather then using ID*/}
                            <label>
                                Password:
                            </label>
                            <input
                                placeholder="Leave blank to autogenerate a password"
                                class="form-control"
                                name="password"
                                label="password"
                                type="text"
                                className="form_input required"
                                value={this.state.password}
                                onChange={this.onChange}/>
                        </div>
                        {inputs}

                        <div className="form_row">
                            <input
                                bsStyle="primary"
                                type="button"
                                value="+"
                                className="form_submit_contact"
                                onClick={this.addInput}>
                            </input>
                        </div>
                        <div className="form_row">
                            < input
                                bsStyle="primary"
                                type="submit"
                                value="Submit"
                                className="form_submit_contact"
                                onClick={this.onSave}>
                            </input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default RSVPAdminForm;