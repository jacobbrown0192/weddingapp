import React, {Component} from 'react';

import UsersBox from './components/UsersBox';
import PageHeader from "../../components/PageHeader/index";

const title = "User Codes";
const header_text = "Welcome to the users page. You must be special to be here";

class Users extends Component
{
    render()
    {
        return(
            <div className="admin">
                <PageHeader title = {title} header_text = {header_text}/>
                <UsersBox url='/api/users' pollInterval={2000} power={true}/>
            </div>
        )
    }
}

export default Users