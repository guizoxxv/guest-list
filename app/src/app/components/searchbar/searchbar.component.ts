import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { GuestsFilter, SearchbarToogle } from '../../actions/guest-list.action';

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
    store.select('guestList').subscribe(state => {
      this.searchbarActive$ = state.searchbarActive;
      this.guestsDataSource$ = state.guestsDataSource;
      this.guestsFilter$ = state.guestsFilter;
    });
  }

  toogleSearchbar() {
    this.applyFilter('');
    this.store.dispatch(new SearchbarToogle());
  }

  applyFilter(filterValue: string) {
    this.store.dispatch(new GuestsFilter(filterValue));
  }

  ngOnInit() {}

}
