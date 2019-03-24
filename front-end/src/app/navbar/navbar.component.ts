import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchbarToogle } from '../actions/searchbar.action';
import { AppState } from '../app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchbarActive$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.searchbarActive$ = store.select('searchbar');
  }

  toogleSearchbar() {
    this.store.dispatch(new SearchbarToogle());
  }

  ngOnInit() {
  }

}
