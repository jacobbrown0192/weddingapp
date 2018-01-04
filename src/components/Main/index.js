import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

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

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"


const PrivateRoute = ({ component: Component, Auth, ...rest }) => (
    <Route {...rest} render={props => (
        Auth > 0 ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
)

class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {auth: 0, user: -1}
    }

    handleAuth(a)
    {
        this.setState({auth: a.access, user: a['_id']});
    }

    render()
    {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <PrivateRoute path='/rsvp' component={RSVP} Auth={this.state.auth} />
                    <Route path='/upload' component={UploadPhotos}/>
                    <Route path='/ourstory' component={OurStory}/>
                    <Route path='/yourstories' component={YourStories}/>
                    <Route path='/schedule' component={Schedule}/>
                    <Route path='/gallery' component={Gallery}/>
                    <Route path='/faqs' component={FAQs}/>
                    <Route path='/songrequest' component={SongRequests}/>
                    <Route
                        path="/login"
                        render={(routeProps) => (
                            <SignInPage {...routeProps} Auth={this.state.auth} AuthHandler={this.handleAuth.bind(this)} />
                        )}
                    />
                    <PrivateRoute path='/signup' component={RegisterPage} Auth={this.state.auth}/>
                    <PrivateRoute path='/users' component={Users} Auth={this.state.auth}/>
                    <Route path='/logout' />
                    <Route path='*' component={PageNotFound} />
                </Switch>
            </main>
        )
    }
}

export default Main