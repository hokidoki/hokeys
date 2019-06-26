//라이브러리
import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
//리듀서
import  loginModalReducer from './loginBoxReducer'
import authReducer from './auth/reducer'






export function configureStore(history){
    const middleware = applyMiddleware(thunk,routerMiddleware(history));

    const composed = window.__REDUX_DEVTOOLS_EXTENSION__?
    compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    ):
    middleware;
    
    return createStore(
        combineReducers({
            auth : authReducer,
            loginModal : loginModalReducer,
            router : connectRouter(history)
        }),
        composed
    )
}