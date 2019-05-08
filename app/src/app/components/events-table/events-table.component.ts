import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { ApiService } from '../../services/api.service';
import { EventsSet, EventsFilter } from '../../actions/event-list.action';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'actions'];
  eventsDataSource$: Observable<Object>;
  eventsFilter$: Observable<string>;

  constructor(private store: Store<AppState>, private apiService: ApiService) {
    store.select('eventList').subscribe(state => {
      this.eventsDataSource$ = state.eventsDataSource;
      this.eventsFilter$ = state.eventsFilter;
    });
  }

  ngOnInit() {
    this.apiService.getEvents()
      .subscribe((res) => {
        this.store.dispatch(new EventsSet(res));
      });
  }

}
