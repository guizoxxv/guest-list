import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchbarToogle } from '../actions/searchbar.action';
import { AppState } from '../app.state';
import { LettersCardToogle } from '../actions/letters-card.action';
import { GuestsTableFilter } from '../actions/guests-table.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
