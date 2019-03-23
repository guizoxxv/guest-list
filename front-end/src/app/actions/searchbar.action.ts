import { Action } from '@ngrx/store';

export enum ActionTypes {
    SearchbarToogle = '[SEARCHBAR] SearchbarToogle',
}

export class SearchbarToogle implements Action {
    readonly type = ActionTypes.SearchbarToogle;
}