import { Action } from '@ngrx/store';
import { Guest } from '../models/guest.model';

export enum ActionTypes {
    GuestsSet = 'GuestsSet',
    GuestsFilter = 'GuestsFilter',
    LettersCardToogle = 'LettersCardToogle',
    SearchbarToogle = 'SearchbarToogle',
    EventNameSet = 'EventNameSet',
}

export class GuestsSet implements Action {
    readonly type = ActionTypes.GuestsSet;

    // TODO: payload Guest[]
    constructor(public payload: any) { }
}

export class GuestsFilter implements Action {
    readonly type = ActionTypes.GuestsFilter;

    constructor(public payload: string) { }
}

export class LettersCardToogle implements Action {
    readonly type = ActionTypes.LettersCardToogle;
}

export class SearchbarToogle implements Action {
    readonly type = ActionTypes.SearchbarToogle;
}

export class EventNameSet implements Action {
    readonly type = ActionTypes.EventNameSet;

    constructor(public payload: string) { }
}