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

  getGuests() {
    // return this.http.get(`${this.apiHost}/api/guests`);
    // TODO: EventID url parameter
    return this.http.get(`${this.apiHost}/api/5cd1c32dc217b7d456d80e42/guests`);
  }

  updateGuestPresent(guest) {
    return this.http.put(`${this.apiHost}/api/guests`, guest);
  }
}
