import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchbarToogle } from '../actions/searchbar.action';
import { AppState } from '../app.state';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchbarActive$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.searchbarActive$ = store.select('searchbarActive');
  }

  toogleSearchbar() {
    this.store.dispatch(new SearchbarToogle());
  }

  ngOnInit() {
  }

}
