import { ActionTypes } from '../actions/app.action';

export function AppReducer(state = {
    flashMessage: null,
}, action) {
    switch (action.type) {
        case ActionTypes.FlashMessage:
            return {
                ...state,
                flashMessage: action.payload,
            };
        case ActionTypes.RemoveFlashMessage:
            return {
                ...state,
                flashMessage: null,
            };
        default:
            return state;
    }
}