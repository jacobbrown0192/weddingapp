import React, { Component } from 'react';
import axios from 'axios';
import DynamicRSVPInputs from './components/DynamicRSVPInputs'

class RSVPAddPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {userid: -1, rsvp: [], finished: false, inputCount: 0 };
        this.setState({auth: props.auth});
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(e)
    {
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

    render() {
        return (
            < div>
                <h1>Sign Up</h1>
                < form>
                    <DynamicRSVPInputs />
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

export default RSVPAddPage;