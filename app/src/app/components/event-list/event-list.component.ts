import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveFlashMessage } from '../../actions/app.action';
import { FlashMessageInterface } from '../../interfaces/flahMessage.interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  flashMessage$: Observable<FlashMessageInterface>;

  constructor(private store: Store<AppState>) {
    store.select('app').subscribe(state => {
      this.flashMessage$ = state.flashMessage;
    });
  }

  ngOnInit() {
    if(this.flashMessage$) {
      let store = this.store;

      setTimeout(function () {
        store.dispatch(new RemoveFlashMessage());
      }, 5000);
    }
  }

}
