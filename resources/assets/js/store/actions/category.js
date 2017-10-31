/* ============
 * Actions for the category module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import {CATEGORY_INSERT,CATEGORY_ERROR} from '../action-types'

export function categoryInsert(payload) {
    return {
        type: CATEGORY_INSERT,
        payload
    }
}

export function categoryError(payload) {
    return {
        type: CATEGORY_ERROR,
        payload
    }
}