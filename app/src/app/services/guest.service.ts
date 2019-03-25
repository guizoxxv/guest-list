import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }

  getGuests() {
    let apiHost = isDevMode() ? 'http://172.17.0.1:3009' : 'http://127.0.0.1:8080';

    return this.http.get(`${apiHost}/api/guests`);
  }

  updateGuest() {
    //
  }
}
