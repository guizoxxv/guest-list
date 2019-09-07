import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchbarActive$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    store.select('app').subscribe(state => {
      this.searchbarActive$ = state.searchbarActive;
    });
  }

  ngOnInit() {
  }

}
