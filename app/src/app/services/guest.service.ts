import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private apiHost: string;

  constructor(private http: HttpClient) {
    this.apiHost = environment.apiHost;
  }

  getGuests() {
    return this.http.get(`${this.apiHost}/api/guests`);
  }

  updateGuestPresent(guest) {
    return this.http.put(`${this.apiHost}/api/guests`, guest);
  }
}
