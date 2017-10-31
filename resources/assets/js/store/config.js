/**
 * Main store function
 */

import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers'
import {autoRehydrate,persistStore} from 'redux-persist'

export default function (initialState = {}){
    // Middleware and store enhancers
    const enhancers = [
        applyMiddleware(thunk)
    ];

    if(process.env.NODE_ENV !=='production') {
        enhancers.push(applyMiddleware(createLogger()))
    }

    const store = createStore(rootReducer, initialState, compose(...enhancers,autoRehydrate()));

    // for hot reloading reducers
    if(module.hot){
        // Enable Webpack hot module replacement for reducers
        module.hot.accespt('./reducers',() => {
            const nextReducer = require('.reducers').default;
            store.replaceReducer(nextReducer)
        })
    }
    persistStore(store);
    return store
}
