import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { SearchbarToogle } from '../../actions/searchbar.action';
import { LettersCardToogle } from '../../actions/letters-card.action';
import { GuestsTableFilter } from '../../actions/guests-table.action';

@Component({
  selector: 'app-guest-list-navbar',
  templateUrl: './guest-list-navbar.component.html',
  styleUrls: ['./guest-list-navbar.component.scss']
})
export class GuestListNavbarComponent implements OnInit {

  searchbarActive$: Observable<boolean>;
  lettersCardActive$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    store.select('searchbar').subscribe(state => {
      this.searchbarActive$ = state;
    });
    store.select('lettersCard').subscribe(state => {
      this.lettersCardActive$ = state;
    });
  }

  toogleSearchbar() {
    this.store.dispatch(new GuestsTableFilter(''));
    this.store.dispatch(new SearchbarToogle());
  }

  toogleLettersCard() {
    this.store.dispatch(new GuestsTableFilter(''));
    this.store.dispatch(new LettersCardToogle());
  }

  ngOnInit() {
  }
  
}
