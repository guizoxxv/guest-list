import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { GuestService } from '../../services/guest.service';
import { GuestsTableSet } from '../../actions/guests-table.action';

@Component({
  selector: 'app-guests-table',
  templateUrl: './guests-table.component.html',
  styleUrls: ['./guests-table.component.scss']
})
export class GuestsTableComponent implements OnInit {
  searchBarActive: boolean = false;
  displayedColumns: string[] = ['name', 'present'];
  guestsDataSource$: Observable<Object>;

  constructor(private store: Store<AppState>, private guestService: GuestService) {
    store.select('guestsTable').subscribe(state => {
      this.guestsDataSource$ = state.guestsDataSource;
    });
  }

  ngOnInit() {
    this.guestService.getGuests()
      .subscribe((res) => {
        this.store.dispatch(new GuestsTableSet(res));
      });
  }

}
