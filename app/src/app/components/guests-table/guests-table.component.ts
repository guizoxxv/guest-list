import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { ApiService } from '../../services/api.service';
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

  constructor(private store: Store<AppState>, private apiService: ApiService) {
    store.select('guestsTable').subscribe(state => {
      this.guestsDataSource$ = state.guestsDataSource;
      this.guestsFilter$ = state.filter;
    });
  }

  ngOnInit() {
    this.apiService.getGuests()
      .subscribe((res) => {
        this.store.dispatch(new GuestsTableSet(res));
      });
  }

  updateGuestPresent(guest) {
    this.apiService.updateGuestPresent(guest)
      .subscribe(res => {
        this.apiService.getGuests()
          .subscribe((res) => {
            this.store.dispatch(new GuestsTableSet(res));
            this.store.dispatch(new GuestsTableFilter(String(this.guestsFilter$)));
          });
      });
  }
  
}
