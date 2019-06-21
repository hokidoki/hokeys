import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore } from './reducer/index'
import firebase from 'firebase'

const store = configureStore();

var config ={
    apiKey: "AIzaSyBFqFWXNecwYdzVugabCOgWxMmh9uzDezs",
    authDomain: "oauth-project-d0540.firebaseapp.com",
    databaseURL: "https://oauth-project-d0540.firebaseio.com",
    projectId: "oauth-project-d0540",
    storageBucket: "oauth-project-d0540.appspot.com",
    messagingSenderId: "451956853387",
    appId: "1:451956853387:web:c68c7bdc3e448bdd"
}

firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
