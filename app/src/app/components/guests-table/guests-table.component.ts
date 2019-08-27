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

  displayedColumns: string[] = ['name', 'present'];
  guestsDataSource$: Observable<Object>;
  guestsPresentCount$: Observable<number>;
  guestsFilter$: Observable<string>;
  eventId: string = ''; // TODO: ObjectId type

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private apiService: ApiService) {
    store.select('guestList').subscribe(state => {
      this.guestsDataSource$ = state.guestsDataSource;
      this.guestsFilter$ = state.guestsFilter;
      this.guestsPresentCount$ = state.guestsPresentCount;
    });
  }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('eventId');
  }

  updateGuestPresent(guest) {
    this.apiService.updateGuestPresent(this.eventId, guest)
      .subscribe(res => {
        this.apiService.getEvent(this.eventId)
          .subscribe(res => {
            this.store.dispatch(new GuestsSet(res['guests']));
            this.store.dispatch(new GuestsFilter(String(this.guestsFilter$)));
          });
      });
  }
  
}
