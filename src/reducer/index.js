//라이브러리
import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
//리듀서
<<<<<<< HEAD
import loginModalReducer from './loginBoxReducer'
import authReducer from './auth/reducer'
import addArticleReducer from './addArticle/reducer'
=======
import  loginModalReducer from './loginBoxReducer'
import authReducer from './auth/reducer'
>>>>>>> master






<<<<<<< HEAD

=======
>>>>>>> master
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
<<<<<<< HEAD
            addArticle : addArticleReducer,
=======
>>>>>>> master
            router : connectRouter(history)
        }),
        composed
    )
}