import { showAlert } from './action'
import { CREATE_POST } from './types'

const forbiddden = ['fuck', 'spam', 'php']

export function forbiddenWordsMiddleWare({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbiddden.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlert('Error - SPAM'))
                }
            }
            return next(action)
        }
    }
}