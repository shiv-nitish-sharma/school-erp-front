import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/application/App';
import App2 from "../src/application/App2";
import * as serviceWorker from './serviceWorker';

let hostName = window.location.host;

if (hostName === 'localhost:3000') {
    ReactDOM.render(<App hostName={hostName} />, document.getElementById('root'));

} else {
    ReactDOM.render(<App2 hostName={hostName} />, document.getElementById('root'));

}
// ReactDOM.render(<App hostName={hostName} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
