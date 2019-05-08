import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-guests-counter',
  templateUrl: './guests-counter.component.html',
  styleUrls: ['./guests-counter.component.scss']
})
export class GuestsCounterComponent implements OnInit {
  
  guestsCount$: Observable<number>;
  guestsPresentCount$: Observable<number>;

  constructor(private store: Store<AppState>) {
    store.select('guestsTable').subscribe(state => {
      this.guestsCount$ = state.guestsCount;
      this.guestsPresentCount$ = state.guestsPresentCount;
    });
  }

  ngOnInit() {
  }

}
