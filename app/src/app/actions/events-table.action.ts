import { Action } from '@ngrx/store';
import { Event } from '../models/event.model';

export enum ActionTypes {
    EventsTableSet = '[EVENTS_TABLE] EventsTableSet',
    EventsTableFilter = '[EVENTS_TABLE] EventsTableFilter',
}

export class EventsTableSet implements Action {
    readonly type = ActionTypes.EventsTableSet;
    
    // TODO: payload Event[]
    constructor(public payload: any) { }
}

export class EventsTableFilter implements Action {
    readonly type = ActionTypes.EventsTableFilter;

    constructor(public payload: string) { }
}