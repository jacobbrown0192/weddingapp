import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import App from './App.js';

const el =  document.getElementById('root');

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), el)

registerServiceWorker();
