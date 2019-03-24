import { Guest } from './models/guest.model';

export interface AppState {
    readonly searchbarActive: boolean;
    readonly guests: Guest[];
    readonly guestsDataSource: Object;
}