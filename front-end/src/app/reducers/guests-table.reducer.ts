import { ActionTypes } from '../actions/guests-table.action';
import { Guest } from '../models/guest.model';
import { MatTableDataSource } from '@angular/material';

const GUESTS_DATA: Guest[] = [
    { name: 'Huguinho', present: false },
    { name: 'Zezinho', present: true },
    { name: 'Luizinho', present: false },
];

export function GuestsTableReducer(state = new MatTableDataSource(GUESTS_DATA), action) {
    switch (action.type) {
        case ActionTypes.GuestsTableSet:
            return state;
        case ActionTypes.GuestsTableFilter:
            state.filter = action.payload.trim().toLowerCase();

            return state;
        default:
            return state;
    }
}