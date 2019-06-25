import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'

import  loginModalReducer from './loginBoxReducer'
import authReducer from './auth/reducer'




export function configureStore(){
    const middleware = applyMiddleware(thunk);

    const composed = window.__REDUX_DEVTOOLS_EXTENSION__?
    compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    ):
    middleware;
    
    return createStore(
        combineReducers({
            auth : authReducer,
            loginModal : loginModalReducer
        }),
        composed
    )
}