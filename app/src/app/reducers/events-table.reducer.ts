import { ActionTypes } from '../actions/events-table.action';
import { Event } from '../models/event.model';
import { MatTableDataSource } from '@angular/material';

export function EventsTableReducer(state = { eventsDataSource: null, filter: '' }, action) {
    switch (action.type) {
        case ActionTypes.EventsTableSet:
            let dataSource = new MatTableDataSource(action.payload);
            
            dataSource.filterPredicate = function (data: Event, filter: string): boolean {
                return data.name.trim().toLowerCase().startsWith(filter.trim().toLowerCase());
            };
            
            return {
                ...state,
                eventsDataSource: dataSource,
            };
        case ActionTypes.EventsTableFilter:
            state.eventsDataSource.filter = action.payload;

            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
}