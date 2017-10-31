import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import {authActions} from '../actions'

/**
 *
 * @param credentials
 * @returns {function(*=)}
 */

export function login(credentials) {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('auth/login', credentials)
                .then(res => {
                    const data = Transformer.fetch(res.data);
                    dispatch(authActions.authLogin(data));
                    return resolve();
                })
                .catch((err) => {
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };
                    if (statusCode === 422) {
                        // status 422 means unprocessable entity
                        const resetErrors = {
                            errors: err.response.data,
                            replace: false,
                            searchStr: '',
                            replaceStr: '',
                        };
                        data.error = Transformer.resetValidationFields(resetErrors);
                    } else if (statusCode === 401) {
                        // status 401 means unauthorized
                        data.error = err.response.data.message;
                    }
                    return reject(data);
                })
        })
    )
}

export function register(credentials) {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('auth/register', Transformer.send(credentials))
                .then(res => {
                    const data = Transformer.fetch(res.data);
                    dispatch(authActions.authLogin(data.accessToken));
                    return resolve();
                })
                .catch((err) => {
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode
                    };
                    if (statusCode === 422) {
                        // status 422 means unprocessable entity
                        const resetErrors = {
                            error: err.response.data,
                            replace: false,
                            searchStr: '',
                            replaceStr: ''
                        };
                        data.error = Transformer.resetValidationFields(resetErrors);
                    } else if (statusCode === 401) {
                        // status 401 means unauthorized
                        data.error = err.response.data.message;
                    }
                    return reject(data);
                })
        })
    )
}

/**
 * ]
 * @returns {function(*)}
 */
export function logout() {
    return dispatch => {
        return Http.delete('auth/logout')
            .then(() => {
                dispatch(authActions.authLogout())
            })
            .catch(err => {
                console.log(err)
            })
    }
}