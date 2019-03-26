import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private apiHost: string;

  constructor(private http: HttpClient) {
    this.apiHost = isDevMode() ? 'http://localhost:3009' : 'http://localhost:3000';
  }

  getGuests() {
    return this.http.get(`${this.apiHost}/api/guests`);
  }

  updateGuestPresent(guest) {
    return this.http.put(`${this.apiHost}/api/guests`, guest);
  }
}
