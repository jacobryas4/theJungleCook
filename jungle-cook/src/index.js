import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAdd5-7Bvzli2FPeXOok65xSG5hgqS6Znk",
    authDomain: "crud-968a6.firebaseapp.com",
    databaseURL: "https://crud-968a6.firebaseio.com",
    projectId: "crud-968a6",
    storageBucket: "crud-968a6.appspot.com",
    messagingSenderId: "282310369514"
};
firebase.initializeApp(config);

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
