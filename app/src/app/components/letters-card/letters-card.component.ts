import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { GuestsFilter } from '../../actions/guest-list.action';

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
    store.select('guestList').subscribe(state => {
      this.searchbarActive$ = state.searchbarActive;
      this.lettersCardActive$ = state.lettersCardActive;
      this.guestsFilter$ = state.guestsFilter;
    });
  }
  
  ngOnInit() {
    //
  }

  applyFilter(filterValue: string) {
    if (String(this.guestsFilter$) == filterValue) {
      this.store.dispatch(new GuestsFilter(''));
    } else {
      this.store.dispatch(new GuestsFilter(filterValue));
    }
  }

  letterClasses(letter) {
    if (String(this.guestsFilter$) == letter) {
      return 'bg-grey-dark';
    }

    return 'bg-grey-light';
  }

}
