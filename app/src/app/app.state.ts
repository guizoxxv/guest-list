export interface AppState {
    readonly searchbarActive: boolean;
    readonly lettersCardActive: boolean;
    readonly guestsDataSource: Object;
    readonly eventsDataSource: Object;
    readonly guestsFilter: string;
    readonly eventsFilter: string;
    readonly guestsCount: number;
    readonly guestsPresentCount: number;
}