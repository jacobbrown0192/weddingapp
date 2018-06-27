import React, { Component } from 'react';

import UsersBox from './components/UsersBox';
import {Grid, Row} from "react-bootstrap";

//TODO: Update to bootstrap
class Users extends Component
{
    render()
    {
        return(
            <Grid>
                <Row>
                    <h1>Registered People</h1>
                </Row>
                <UsersBox url='/api/users' pollInterval={2000} power={true}/>
            </Grid>
        )
    }
}

export default Users