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
  guestsFilter$: Observable<string>;
  
  constructor(private store: Store<AppState>) {
    this.searchbarActive$ = store.select('searchbar');
    this.lettersCardActive$ = store.select('lettersCard');
    store.select('guestsTable').subscribe(state => {
      this.guestsFilter$ = state.filter;
    });
  }
  
  ngOnInit() {
    //
  }

  applyFilter(filterValue: string) {
    if (String(this.guestsFilter$) == filterValue) {
      this.store.dispatch(new GuestsTableFilter(''));
    } else {
      this.store.dispatch(new GuestsTableFilter(filterValue));
    }
  }

  letterClasses(letter) {
    if (String(this.guestsFilter$) == letter) {
      return 'bg-grey-dark';
    }

    return 'bg-grey-light';
  }

}
