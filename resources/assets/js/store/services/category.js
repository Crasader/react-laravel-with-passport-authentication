import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import {categoryActions} from '../actions'

export function fetchCategory(){
    return dispatch => (
        new Promise((resolve,reject) => {
            Http.get('category')
                .then((res) => {
                    const data = Transformer.fetch(res.data);
                    dispatch(categoryActions.categoryInsert(data));
                    return resolve();
                })
                .catch((err) => {
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };
                    if(statusCode !== 200){
                        const resetErrors = {
                            errors: err.response.data,
                            replace: false,
                            searchStr: '',
                            replaceStr: '',
                        };
                        data.error = Transformer.resetValidationFields(resetErrors);
                    }
                    reject(data);
                })
        })
    )
}