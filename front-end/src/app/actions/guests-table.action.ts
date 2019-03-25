import { Action } from '@ngrx/store';
import { Guest } from '../models/guest.model';

export enum ActionTypes {
    GuestsTableSet = '[GUESTS_TABLE] GuestsTableSet',
    GuestsTableFilter = '[GUESTS_TABLE] GuestsTableFilter',
}

export class GuestsTableSet implements Action {
    readonly type = ActionTypes.GuestsTableSet;

    // TODO: payload Guest[]
    constructor(public payload: any) { }
}

export class GuestsTableFilter implements Action {
    readonly type = ActionTypes.GuestsTableFilter;
    
    constructor(public payload: string) { }
}