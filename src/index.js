import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import './styles/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './styles/boxCommon.css';
import './styles/loader.css';
import './styles/crawler.css';
import './styles/fontAndImages.css';
const store = configureStore();

render(    
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
