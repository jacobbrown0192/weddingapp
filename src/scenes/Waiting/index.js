import React, { Component } from 'react';
import {  Redirect } from 'react-router-dom';
import PageHeader from "../../components/PageHeader/index";

const title = "LOADING";
const header_text = "Love is friendship that has caught fire. It is quiet understanding, sharing and forgiving. <br />\n" +
    "It is loyalty through good and bad times. It settles for less than perfection<br /> and makes allowances for human weaknesses.\n" +
    "<br /> <em>\"Répondez s'il vous plaît.\"</em>";

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
                <PageHeader title={title} header_text={header_text}/>
            </div>
        )
    }
}

export default Waiting