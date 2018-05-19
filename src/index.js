import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import './styles/app.css';
import './styles/bootstrap.min.css';
import './styles/boxCommon.css';
import $ from 'jquery';

render(
        <App />
    , document.getElementById('root'));
