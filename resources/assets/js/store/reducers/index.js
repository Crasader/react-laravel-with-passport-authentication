import {combineReducers} from 'redux'

import auth from './auth'
import persistStore from './persistStore'
import category from './category'

export default combineReducers({auth,persistStore,category})