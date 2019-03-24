import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchbarToogle } from '../actions/searchbar.action';
import { GuestsTableFilter } from '../actions/guests-table.action';
import { AppState } from '../app.state';
import { Guest } from '../models/guest.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchbarActive$: Observable<boolean>;
  guests$: Observable<Guest[]>;
  guestsDataSource$: Observable<Object>;
  filter: string;

  constructor(private store: Store<AppState>) {
    this.searchbarActive$ = store.select('searchbar');
  }

  toogleSearchbar() {
    this.applyFilter('');
    this.store.dispatch(new SearchbarToogle());
  }

  applyFilter(filterValue: string) {
    this.filter = filterValue;
    this.store.dispatch(new GuestsTableFilter(filterValue));
  }

  ngOnInit() {}

}
