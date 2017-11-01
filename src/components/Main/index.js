import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../scenes/Home'
import RSVP from '../../scenes/RSVP'
import UploadPhotos from '../../scenes/UploadPhotos'
import OurStory from "../../scenes/OurStory/index";
import YourStories from "../../scenes/YourStories/index";
import Schedule from "../../scenes/Schedule/index";
import Gallery from "../../scenes/Gallery/index";
import FAQs from "../../scenes/FAQs/index";
import SongRequests from "../../scenes/SongRequests/index";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

class Main extends Component
{
    render()
    {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/rsvp' component={RSVP}/>
                    <Route path='/upload' component={UploadPhotos}/>
                    <Route path='/ourstory' component={OurStory}/>
                    <Route path='/yourstories' component={YourStories}/>
                    <Route path='/schedule' component={Schedule}>Schedule</Route>>
                    <Route path='/gallery' component={Gallery}>Gallery</Route>>
                    <Route path='/faqs' component={FAQs}>FAQs</Route>>
                    <Route path='/songrequest' component={SongRequests}>Song Requests</Route>>
                </Switch>
            </main>
        )
    }
}

export default Main