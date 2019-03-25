import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/letters-card.action';

export function LettersCardReducer(state: boolean = false, action: Action) {
    switch (action.type) {
        case ActionTypes.LettersCardToogle:
            return !state;
        default:
            return state;
    }
}