import { ActionTypes } from '../actions/guest-list.action';
import { Guest } from '../models/guest.model';
import { MatTableDataSource } from '@angular/material';

export function GuestListReducer(state = {
    eventName: null,
    guestsDataSource: null,
    guestsFilter: '',
    guestsCount: 0,
    guestsPresentCount: 0,
    lettersCardActive: false,
    searchbarActive: false,
}, action) {
    switch (action.type) {
        case ActionTypes.GuestsSet:
            let dataSource = new MatTableDataSource(action.payload);
            let guestsCount = action.payload.length;
            let guestsPresentCount = action.payload.filter(guest => {
                return guest.present === true;
            }).length;

            dataSource.filterPredicate = function (data: Guest, filter: string): boolean {
                return data.name.trim().toLowerCase().startsWith(filter.trim().toLowerCase()) || data.formatted_name.trim().toLowerCase().startsWith(filter.trim().toLowerCase());
            };

            return {
                ...state,
                guestsDataSource: dataSource,
                guestsCount: guestsCount,
                guestsPresentCount: guestsPresentCount,
            };
        case ActionTypes.GuestsFilter:
            state.guestsDataSource.filter = action.payload;

            return {
                ...state,
                guestsFilter: action.payload,
            };
        case ActionTypes.LettersCardToogle:
            return {
                ...state,
                lettersCardActive: !state.lettersCardActive,
            };
        case ActionTypes.SearchbarToogle:
            return {
                ...state,
                searchbarActive: !state.searchbarActive,
            };
        case ActionTypes.EventNameSet:
            return {
                ...state,
                eventName: action.payload,
            };
        default:
            return state;
    }
}