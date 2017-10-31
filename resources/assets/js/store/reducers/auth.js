import HTTP from '../../utils/Http'
import {
    AUTH_CHECK,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_REFRESH_TOKEN,
    AUTH_RESET_PASSWORD,
} from '../action-types';


const user = {
    is: null,
    name: null,
    email: null,
    admin : 0,
    createdAt: null,
    updatedAt: null
};

const initialState = {
    isAuthenticated: false,
    isAdmin: false,
    user
};

const reducer = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case AUTH_REFRESH_TOKEN:
        case AUTH_LOGIN:
            return login(state, payload);
        case AUTH_CHECK:
            return checkAuth(state);
        case AUTH_LOGOUT:
            return logout(state);
        case AUTH_RESET_PASSWORD:
            return resetPasword(state);
        default:
            return state;
    }
};

function login(state, payload) {
    const aceessToken = payload.token.accessToken;
    const user = payload.user[0];
    if(!!payload.user[0].admin){
        localStorage.setItem('is_admin',true);
    } else {
        localStorage.setItem('is_admin',false);
    }
    localStorage.setItem('access_token',aceessToken);
    HTTP.defaults.headers.common['Authorization'] = `Bearer ${aceessToken}`;
    state = Object.assign({}, state,{
        isAuthenticated: true,
        isAdmin: localStorage.getItem('is_admin') == 'true' ? true : false,
        user}
        );
    return state
}

function checkAuth(state){
    state = Object.assign({},state,{
        isAuthenticated: !!localStorage.getItem('access_token'),
        isAdmin: localStorage.getItem('is_admin') == 'true' ? true : false,
    });

    if(state.isAuthenticated){
        HTTP.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    }
    return state;
}

function logout(state){
    localStorage.removeItem('access_token');
    localStorage.setItem('is_admin',false);
    state = Object.assign({},state,{
        isAuthenticated: false,
        isAdmin: false,
        user
    });
    return state;
}

function resetPassword(state){
    state.resetPassword = true;
    return state;
}

export const getAuth = state => state.auth.isAuthenticated;

export default reducer;