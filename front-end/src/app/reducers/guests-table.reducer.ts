import { ActionTypes } from '../actions/guests-table.action';
import { Guest } from '../models/guest.model';
import { MatTableDataSource } from '@angular/material';

const GUESTS_DATA: Guest[] = [
    { name: 'Huguinho', formatted_name: 'huginho', present: false },
    { name: 'Zézinho', formatted_name: 'zezinho', present: true },
    { name: 'Luizinho', formatted_name: 'luizinho', present: false },
];

const GUEST_DATA_SOURCE = new MatTableDataSource(GUESTS_DATA);
GUEST_DATA_SOURCE.filterPredicate = function (data, filter: string): boolean {
    return data.name.trim().toLowerCase().startsWith(filter.trim().toLowerCase()) || data.formatted_name.trim().toLowerCase().startsWith(filter.trim().toLowerCase());
};

export function GuestsTableReducer(state = { filter: '', guestsDataSource: GUEST_DATA_SOURCE }, action) {
    switch (action.type) {
        case ActionTypes.GuestsTableSet:
            return state;
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