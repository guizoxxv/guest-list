import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiHost: string;

  constructor(private http: HttpClient) {
    this.apiHost = environment.apiHost;
  }

  getEvents() {
    return this.http.get(`${this.apiHost}/api/events`);
  }

  getEvent(eventId) {
    return this.http.get(`${this.apiHost}/api/events/${eventId}`);
  }

  getGuests(eventId) {
    return this.http.get(`${this.apiHost}/api/${eventId}/guests`);
  }

  updateGuestPresent(guest) {
    return this.http.put(`${this.apiHost}/api/guests`, guest);
  }
}
