import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import  loginModalReducer from './loginBoxReducer'
import penderMiddleware, {penderReducer} from 'redux-pender'
import authReducer from './authReducer';


export function configureStore(){
    const middleware = applyMiddleware(penderMiddleware());

    const composed = window.__REDUX_DEVTOOLS_EXTENSION__?
    compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    ):
    middleware;
    
    return createStore(
        combineReducers({
            pender : penderReducer,
            auth : authReducer,
            loginModal : loginModalReducer
        }),
        composed
    )
}