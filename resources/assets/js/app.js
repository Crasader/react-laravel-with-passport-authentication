/**
 * Created by Sumit-Yadav on 05-10-2017.
 */
//import libraries
import React from 'react'
import {render} from 'react-dom'
import  {Provider} from 'react-redux'

// import components
import store from './store'
import Routes from './routes'
import {authCheck} from "./store/actions/auth";

store.dispatch(authCheck());

render((<Provider store={store}>
        <Routes/>
     </Provider>),
    document.getElementById('app')
);
