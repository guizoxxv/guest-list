import { ActionTypes } from '../actions/event-list.action';
import { Event } from '../models/event.model';
import { MatTableDataSource } from '@angular/material';

export function EventListReducer(state = {
    eventsDataSource: null,
    eventsFilter: ''
}, action) {
    switch (action.type) {
        case ActionTypes.EventsSet:
            let dataSource = new MatTableDataSource(action.payload);
            
            dataSource.filterPredicate = function (data: Event, filter: string): boolean {
                return data.name.trim().toLowerCase().startsWith(filter.trim().toLowerCase());
            };
            
            return {
                ...state,
                eventsDataSource: dataSource,
            };
        case ActionTypes.EventsFilter:
            state.eventsDataSource.filter = action.payload;

            return {
                ...state,
                eventsFilter: action.payload,
            };
        default:
            return state;
    }
}