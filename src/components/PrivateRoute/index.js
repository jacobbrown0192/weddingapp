import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Waiting from "../../scenes/Waiting/index";

export class PrivateRoute extends Route {
    render() {
        if(this.props.userPromise !== null && this.props.test() === false) {
                let Component = Waiting;
                return <Component {...this.props}/>
        }
            if (this.props.Auth > 1) {
                let Component = this.props.component;
                return <Component {...this.props}/>
            }
            else {
                return <Redirect to={{
                    pathname: '/login',
                    state: {from: this.props.location}
                }}/>
            }
    }
}