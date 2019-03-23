import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/searchbar.action';

export function SearchbarActiveReducer(state: boolean = false, action: Action) {
    switch (action.type) {
        case ActionTypes.SearchbarToogle:
            return !state;
        default:
            return state;
    }
}