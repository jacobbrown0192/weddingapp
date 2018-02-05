import React, { Component } from 'react';

import UsersBox from './components/UsersBox';

//TODO: Update to bootstrap
class Users extends Component
{
    render()
    {
        return(
            <div>
                <div>
                    <h1>Registered People</h1>
                </div>
                <UsersBox url='http://localhost:3001/api/users' pollInterval={2000} power={true}/>
            </div>
        )
    }
}

export default Users