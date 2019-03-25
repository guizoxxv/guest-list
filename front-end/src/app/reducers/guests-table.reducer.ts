import { ActionTypes } from '../actions/guests-table.action';
import { Guest } from '../models/guest.model';
import { MatTableDataSource } from '@angular/material';

export function GuestsTableReducer(state = { filter: '', guestsDataSource: null }, action) {
    switch (action.type) {
        case ActionTypes.GuestsTableSet:
            let dataSource = new MatTableDataSource(action.payload);
            
            dataSource.filterPredicate = function (data: Guest, filter: string): boolean {
                return data.name.trim().toLowerCase().startsWith(filter.trim().toLowerCase()) || data.formatted_name.trim().toLowerCase().startsWith(filter.trim().toLowerCase());
            };
            
            return {
                ...state,
                guestsDataSource: dataSource,
            };
        case ActionTypes.GuestsTableFilter:
            state.guestsDataSource.filter = action.payload;

            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
}