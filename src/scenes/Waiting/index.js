import React, { Component } from 'react';
import {  Redirect } from 'react-router-dom';

class Waiting extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {component: ''};
        this.waitOnRedirect = this.waitOnRedirect.bind(this);
    }

    waitOnRedirect()
    {
        if (!this.props.test()) {
            this.props.userPromise.then(function (result) {
                if (result.data.access > 0) {
                    // this.setState({component: <Redirect to={this.props.location}/>})
                    let Component = this.props.component;
                    this.setState({component: <Component {...this.props}/>})
                }
                else {
                    this.setState({component: <Redirect to={{
                        pathname: '/login',
                        state: {from: this.props.location}
                    }}/>})
                }
            }.bind(this))
                .catch(function () {
                    this.setState({component: <Redirect to={{
                        pathname: '/login',
                        state: {from: this.props.location}
                    }}/>})
                }.bind(this));
        }
        else
        {
            this.setState({component: <Redirect to={{
                pathname: '/login',
                state: {from: this.props.location}
            }}/>})
        }
    }

    componentWillMount()
    {
        this.waitOnRedirect();
    }

    render()
    {
        if(this.state.component !== '')
        {
           return this.component;
            // return this.state.component;
        }
        return(
            <div>
                <div>
                    <h1>Waiting Around</h1>
                </div>
            </div>
        )
    }
}

export default Waiting