import React, { Component } from 'react';
import './styles/App.css';

import Header from './components/Header';
import Main from './components/Main';


class App extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

export default App;
