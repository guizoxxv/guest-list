import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { ApiService } from '../../services/api.service';
import { EventsTableSet, EventsTableFilter } from '../../actions/events-table.action';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  eventsDataSource$: Observable<Object>;
  eventsFilter$: Observable<string>;

  constructor(private store: Store<AppState>, private apiService: ApiService) {
    store.select('eventsTable').subscribe(state => {
      this.eventsDataSource$ = state.eventsDataSource;
      this.eventsFilter$ = state.filter;
    });
  }

  ngOnInit() {
    this.apiService.getEvents()
      .subscribe((res) => {
        this.store.dispatch(new EventsTableSet(res));
      });
  }

}
