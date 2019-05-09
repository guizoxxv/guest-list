export interface AppState {
    readonly searchbarActive: boolean;
    readonly lettersCardActive: boolean;
    readonly guestsDataSource: Object;
    readonly guestsFilter: string;
    readonly guestsCount: number;
    readonly guestsPresentCount: number;
    readonly eventsDataSource: Object;
    readonly eventsFilter: string;
    readonly eventName: string;
}