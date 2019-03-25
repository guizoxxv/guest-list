import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { GuestService } from '../../services/guest.service';
import { GuestsTableSet, GuestsTableFilter } from '../../actions/guests-table.action';

@Component({
  selector: 'app-guests-table',
  templateUrl: './guests-table.component.html',
  styleUrls: ['./guests-table.component.scss']
})
export class GuestsTableComponent implements OnInit {
  searchBarActive: boolean = false;
  displayedColumns: string[] = ['name', 'present'];
  guestsDataSource$: Observable<Object>;
  guestsFilter$: Observable<string>;

  constructor(private store: Store<AppState>, private guestService: GuestService) {
    store.select('guestsTable').subscribe(state => {
      this.guestsDataSource$ = state.guestsDataSource;
      this.guestsFilter$ = state.filter;
    });
  }

  ngOnInit() {
    this.guestService.getGuests()
      .subscribe((res) => {
        this.store.dispatch(new GuestsTableSet(res));
      });
  }

  updateGuestPresent(guest) {
    this.guestService.updateGuestPresent(guest)
      .subscribe(res => {
        this.guestService.getGuests()
          .subscribe((res) => {
            this.store.dispatch(new GuestsTableSet(res));
            this.store.dispatch(new GuestsTableFilter(String(this.guestsFilter$)));
          });
      });
  }

}
