import {CATEGORY_INSERT, CATEGORY_ERROR} from '../action-types'

const initialState = {
    isFetched: false,
    items: '',
    errors: ''
};

const reducer = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case 'CATEGORY_INSERT':
            return Object.assign({}, state, {
                isFetched: true,
                items: payload
            });
        case 'CATEGORY_ERROR':
            return Object.assign({}, state, {
                errors: payload
            });
        default:
            return state
    }
};

export default reducer