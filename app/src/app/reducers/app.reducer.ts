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
        default:
            return state;
    }
}