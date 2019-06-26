import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore } from './reducer/index'
import firebase from 'firebase'

import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

import * as authActions from './reducer/auth/actions'

const history = createBrowserHistory();
const store = configureStore(history);

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

firebase.auth().onAuthStateChanged((user)=>{
    store.dispatch(authActions.updateUser(user));
})

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
