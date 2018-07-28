import React, {Component} from 'react';
import './styles/App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from "./components/Footer/index";
import HomeBottom from "./components/HomeBottom/index";


class App extends Component
{
    render()
    {
        return(
            <div>
                <Header />
                <Main />
                <HomeBottom/>
                <Footer/>
            </div>
        )
    }
}

export default App;
