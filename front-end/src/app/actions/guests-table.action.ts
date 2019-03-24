import { Action } from '@ngrx/store';

export enum ActionTypes {
    GuestsTableSet = '[GUESTS_TABLE] GuestsTableSet',
    GuestsTableFilter = '[GUESTS_TABLE] GuestsTableFilter',
}

export class GuestsTableSet implements Action {
    readonly type = ActionTypes.GuestsTableSet;
}

export class GuestsTableFilter implements Action {
    readonly type = ActionTypes.GuestsTableFilter;
    
    constructor(public payload: string) { }
}