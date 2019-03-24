import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchbarToogle } from '../actions/searchbar.action';
import { GuestsTableFilter } from '../actions/guests-table.action';
import { AppState } from '../app.state';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchbarActive$: Observable<boolean>;
  guestsDataSource$: Observable<Object>;
  guestsFilter$: Observable<string>;

  constructor(private store: Store<AppState>) {
    store.select('searchbar').subscribe(state => {
      this.searchbarActive$ = state;
    });
    store.select('guestsTable').subscribe(state => {
      this.guestsDataSource$ = state.guestsDataSource;
      this.guestsFilter$ = state.filter;
    });
  }

  toogleSearchbar() {
    this.applyFilter('');
    this.store.dispatch(new SearchbarToogle());
  }

  applyFilter(filterValue: string) {
    this.store.dispatch(new GuestsTableFilter(filterValue));
  }

  ngOnInit() {}

}
