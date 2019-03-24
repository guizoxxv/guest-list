import { Component, OnInit } from '@angular/core';
import { Guest } from '../models/guest.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
  selector: 'app-guests-table',
  templateUrl: './guests-table.component.html',
  styleUrls: ['./guests-table.component.scss']
})
export class GuestsTableComponent implements OnInit {
  searchBarActive: boolean = false;
  displayedColumns: string[] = ['name', 'present'];
  guests$: Observable<Guest[]>;
  guestsDataSource$: Observable<Object>;

  constructor(private store: Store<AppState>) {
    this.guestsDataSource$ = store.select('guestsTable');
  }

  ngOnInit() {
    //
  }

}
