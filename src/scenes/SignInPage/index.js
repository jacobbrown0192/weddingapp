import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

let userToken = require('../../utils/UserToken');
let storeToken = userToken.storeToken;

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
                < form>
                    < input
                        name="password"
                        label="password"
                        type="text"
                        value={this.state.password}
                        onChange={this.onChange}/>

                    < input
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.onSave}/>
                </form>
            </div>
        );
    }
}

export default SignInPage;