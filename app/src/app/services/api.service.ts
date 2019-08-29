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

  getEvent(eventId: string) {
    return this.http.get(`${this.apiHost}/api/events/${eventId}`);
  }

  createEvent(event) {
    return this.http.post(`${this.apiHost}/api/events`, event);
  }

  updateGuestPresent(eventId: string, guest) {
    return this.http.put(`${this.apiHost}/api/events/${eventId}/update-guest-presence`, guest);
  }

  deleteEvent(eventId: string) {
    return this.http.delete(`${this.apiHost}/api/events/${eventId}/delete`);
  }
}
