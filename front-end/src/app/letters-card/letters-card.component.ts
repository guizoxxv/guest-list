import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { GuestsTableFilter } from '../actions/guests-table.action';

@Component({
  selector: 'app-letters-card',
  templateUrl: './letters-card.component.html',
  styleUrls: ['./letters-card.component.scss']
})
export class LettersCardComponent implements OnInit {
  letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  searchbarActive$: Observable<boolean>;
  lettersCardActive$: Observable<boolean>;
  filter: string;
  
  constructor(private store: Store<AppState>) {
    this.searchbarActive$ = store.select('searchbar');
    this.lettersCardActive$ = store.select('lettersCard');
  }
  
  ngOnInit() {
    //
  }

  applyFilter(filterValue: string) {
    if(this.filter == filterValue) {
      this.store.dispatch(new GuestsTableFilter(''));
    } else {
      this.filter = filterValue;
      this.store.dispatch(new GuestsTableFilter(filterValue));
    }
  }

}
