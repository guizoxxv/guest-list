import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { ApiService } from '../../services/api.service';
import { GuestsSet, EventNameSet } from '../../actions/guest-list.action';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  eventName$: Observable<string>;
  eventId: string = ''; // TODO: ObjectId type

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('eventId');

    this.apiService.getEvent(this.eventId)
      .subscribe(res => {
        this.store.dispatch(new EventNameSet(res['name']));
        this.store.dispatch(new GuestsSet(res['guests']));
      });
  }

}
