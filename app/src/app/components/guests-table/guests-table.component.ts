import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { ApiService } from '../../services/api.service';
import { GuestsSet, GuestsFilter, EventNameSet } from '../../actions/guest-list.action';

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
  eventName$: Observable<string>;
  eventId: string = ''; // TODO: ObjectId type

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private apiService: ApiService) {
    store.select('guestList').subscribe(state => {
      this.guestsDataSource$ = state.guestsDataSource;
      this.guestsFilter$ = state.guestsFilter;
    });
  }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('eventId');
    this.apiService.getEvent(this.eventId)
      .subscribe(res => {
        this.store.dispatch(new EventNameSet(res['name']));
        this.store.dispatch(new GuestsSet(res['guests']));
      });
  }

  updateGuestPresent(guest) {
    this.apiService.updateGuestPresent(guest)
      .subscribe(res => {
        this.apiService.getGuests(this.eventId)
          .subscribe(res => {
            this.store.dispatch(new GuestsSet(res));
            this.store.dispatch(new GuestsFilter(String(this.guestsFilter$)));
          });
      });
  }
  
}
