import { Guest } from './guest.model'

export interface Event {
    name: string;
    guests: Guest[];
}