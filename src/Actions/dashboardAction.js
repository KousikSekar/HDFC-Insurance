import {
    CHANGE_CURRENT_PAGE
} from '../Constants/actionTypes'

export function changePage(currrentPage) {
    return {
        type: CHANGE_CURRENT_PAGE,
        currrentPage
    }
}