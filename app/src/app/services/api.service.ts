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

  createEvent(event) {
    return this.http.post(`${this.apiHost}/api/events`, event);
  }

  getEvent(eventId: string) {
    return this.http.get(`${this.apiHost}/api/events/${eventId}`);
  }

  updateEvent(eventId: string, event) {
    return this.http.put(`${this.apiHost}/api/events/${eventId}`, event);
  }

  deleteEvent(eventId: string) {
    return this.http.delete(`${this.apiHost}/api/events/${eventId}`);
  }

  updateGuestPresent(eventId: string, guest) {
    return this.http.put(`${this.apiHost}/api/events/${eventId}/update-guest-presence`, guest);
  }
}
