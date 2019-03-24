import { Action } from '@ngrx/store';

export enum ActionTypes {
    LettersCardToogle = '[LETTERS_CARD] LettersCardToogle',
}

export class LettersCardToogle implements Action {
    readonly type = ActionTypes.LettersCardToogle;
}