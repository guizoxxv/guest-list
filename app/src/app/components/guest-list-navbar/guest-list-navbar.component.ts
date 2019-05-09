import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { GuestsFilter, LettersCardToogle, SearchbarToogle } from '../../actions/guest-list.action';

@Component({
  selector: 'app-guest-list-navbar',
  templateUrl: './guest-list-navbar.component.html',
  styleUrls: ['./guest-list-navbar.component.scss']
})
export class GuestListNavbarComponent implements OnInit {

  eventName$: Observable<string>;
  searchbarActive$: Observable<boolean>;
  lettersCardActive$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    store.select('guestList').subscribe(state => {
      this.eventName$ = state.eventName;
      this.searchbarActive$ = state.searchbarActive;
      this.lettersCardActive$ = state.lettersCardActive;
    });
  }

  toogleSearchbar() {
    this.store.dispatch(new GuestsFilter(''));
    this.store.dispatch(new SearchbarToogle());
  }

  toogleLettersCard() {
    this.store.dispatch(new GuestsFilter(''));
    this.store.dispatch(new LettersCardToogle());
  }

  ngOnInit() {
  }
  
}
