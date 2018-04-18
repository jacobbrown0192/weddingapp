import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthRoute } from "../AuthRoute";

import Home from '../../scenes/Home'
import RSVP from '../../scenes/RSVP'
import UploadPhotos from '../../scenes/UploadPhotos'
import OurStory from "../../scenes/OurStory/index";
import YourStories from "../../scenes/YourStories/index";
import Schedule from "../../scenes/Schedule/index";
import Gallery from "../../scenes/Gallery/index";
import FAQs from "../../scenes/FAQs/index";
import SongRequests from "../../scenes/SongRequests/index";
import PageNotFound from "../../scenes/PageNotFound/index";
import SignInPage from "../../scenes/SignInPage/index";
import RegisterPage from "../../scenes/RegisterPage/index";
import Users from "../../scenes/Users/index";
import RSVPAddPage from "../../scenes/RSVPAddPage/index";
import RSVPAdmin from "../../scenes/RSVPAdmin/index";
import {PrivateRoute} from "../PrivateRoute/index";


let UserToken = require('../../utils/UserToken');

// The Main components renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {auth: 0, user: -2, userPromise: null, promise: false}
        this.handleLoginAuth = this.handleLoginAuth.bind(this);
    }

    handleAuth(a)
    {
        this.setState({auth: a.access, user: a['_id']});
    }

    handleLoginAuth()
    {
        return this.state.promise
    }

    componentWillMount()
    {
        let token = UserToken.getToken();
        if(!token || token === '') {//if there is no token, dont bother
            return;
        }
        let userPromise = UserToken.getUserFromToken(token);

        this.setState({promise: false});

        userPromise.then(function(result) //TODO FIGURE OUT A WAY TO DO THIS BEFORE LOGIN REDIRECT: maybe send promise to private route and use the promise if it is still pending.
        {
            console.log(result);
            if(!result.data || result.data === '' || result.data === typeof (undefined)) {
                this.setState({promise: true});
                return
            }
            this.setState({auth: result.data.access, user: result.data['_id'], promise: true})
        }.bind(this))
            .catch(function (result) {
                this.setState({promise: true})
        }.bind(this));


        this.setState({userPromise: userPromise});
    }

    render()
    {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <AuthRoute path='/rsvp' component={RSVP} userid={this.state.user} Auth={this.state.auth} userPromise={this.state.userPromise} test={this.handleLoginAuth}/>
                    <Route path='/upload' component={UploadPhotos}/>
                    <Route path='/ourstory' component={OurStory}/>
                    <Route path='/yourstories'
                           render={(props) => (
                               <YourStories Auth={this.state.auth}/>
                               )}
                    />
                    <Route path='/schedule' component={Schedule}/>
                    <Route path='/gallery' component={Gallery}/>
                    <Route path='/faqs' component={FAQs}/>
                    <Route path='/songrequest' component={SongRequests}/>
                    <Route
                        path="/login"
                        render={(routeProps) => (
                            <SignInPage {...routeProps} userid={this.state.user} Auth={this.state.auth} AuthHandler={this.handleAuth.bind(this)} />
                        )}
                    />
                    <PrivateRoute path='/signup' component={RegisterPage} userid={this.state.user} Auth={this.state.auth} userPromise={this.state.userPromise} test={this.handleLoginAuth}/>
                    <PrivateRoute path='/users' component={Users} userid={this.state.user} Auth={this.state.auth} userPromise={this.state.userPromise}  test={this.handleLoginAuth}/>
                    <Route path='/logout' />
                    <PrivateRoute path='/rsvpadd' component={RSVPAddPage} userid={this.state.user} Auth={this.state.auth} userPromise={this.state.userPromise}  test={this.handleLoginAuth}/>
                    <PrivateRoute path='/rsvpadmin' component={RSVPAdmin} userid={this.state.user} Auth={this.state.auth} userPromise={this.state.userPromise}  test={this.handleLoginAuth}/>
                    <Route path='*' component={PageNotFound} />
                </Switch>
            </main>
        )
    }
}

export default Main