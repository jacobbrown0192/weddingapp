import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class RegisterPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {password: '', auth: 0, finished: false };
        this.setState({auth: props.auth});
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(e) {
        return this.setState({password: e.target.value});
    }

    onSave(event) {
        event.preventDefault();
        if (this.state.password)
        {
            var user = this.createUser(this.state.password, 1);
            axios.post('http://localhost:3001/api/signup', user)
                .catch(err => {
                    console.error(err);
                })
        }
    }

    createUser(password, access)
    {
        let user = {
            password: password,
            access: access
        };
        return user;
    }

    render() {

        const { from } = { from: { pathname: '/' } }

        if (this.state.finished)
        {
            return (
                <Redirect to={from}/>
            )
        }

        return (
            < div>
                <h1>Sign Up</h1>
                < form>
                    < input
                        name="password"
                        label="password"
                        type="password"
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

export default RegisterPage;