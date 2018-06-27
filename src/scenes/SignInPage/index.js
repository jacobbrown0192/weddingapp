import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PageHeader from "../../components/PageHeader/index";

let userToken = require('../../utils/UserToken');
let storeToken = userToken.storeToken;

const title = "LOGIN";
const header_text = "Enter your RSVP code here now to RSVP!";

class SignInPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {password: '', auth: 0, data: [] };
        this.setState({auth: props.auth});
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(e) {
        return this.setState({password: e.target.value});
    }

    onSave(event) {
        event.preventDefault();
        var user = this.createUser(this.state.password, 0);
        axios.post('/api/signin', user)
            .then(res =>
            {
                this.setState({data:res.data });
                this.updateAuthData(res.data);
            });
        console.log(this.state.data);
    }

    updateAuthData(data)
    {
        this.props.AuthHandler(data);
        this.setState({auth: data.access});
        storeToken(data._id);
    }

    createUser(password, access)
    {
        var user = {
            password: password,
            access: access
        };
        return user;
    }

    render() {

        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (this.state.auth > 0)
        {
            return (
                <Redirect to={from}/>
            )
        }

        return (
            < div>
                <PageHeader title={title} header_text={header_text} />
                <div className="page_content">
                    <div className="full_width_centered">
                        <div className="form_content">
                            <h3 className="form_toptitle" id="Note"></h3>
                            < form>
                                <div className="form_section">
                                    <h3 className="form_subtitle">ENTER YOUR RSVP CODE BELLOW:</h3>
                                <div className="form_row_full">
                                    < input
                                        name="password"
                                        label="password"
                                        type="text"
                                        className="form_input required"
                                        value={this.state.password}
                                        onChange={this.onChange}/>
                                </div>
                                <div className="form_row">
                                < input
                                    type="submit"
                                    className="form_submit_contact"
                                    onClick={this.onSave}/>
                                </div>
                                </div>
                            </form>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInPage;