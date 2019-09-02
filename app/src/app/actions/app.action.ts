import { Action } from '@ngrx/store';
import { FlashMessageInterface } from '../interfaces/flahMessage.interface';

export enum ActionTypes {
    FlashMessage = 'FlashMessage',
}

export class FlashMessage implements Action {
    readonly type = ActionTypes.FlashMessage;

    constructor(public payload: FlashMessageInterface) { }
}