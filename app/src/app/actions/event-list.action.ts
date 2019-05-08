import { Action } from '@ngrx/store';
import { Event } from '../models/event.model';

export enum ActionTypes {
    EventsSet = 'EventsSet',
    EventsFilter = 'EventsFilter',
}

export class EventsSet implements Action {
    readonly type = ActionTypes.EventsSet;
    
    // TODO: payload Event[]
    constructor(public payload: any) { }
}

export class EventsFilter implements Action {
    readonly type = ActionTypes.EventsFilter;

    constructor(public payload: string) { }
}