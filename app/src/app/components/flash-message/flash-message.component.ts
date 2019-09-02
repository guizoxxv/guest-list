import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlashMessageInterface } from '../../interfaces/flahMessage.interface';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.scss']
})
export class FlashMessageComponent implements OnInit {

  flashMessage$: Observable<FlashMessageInterface>;

  constructor(private store: Store<AppState>) {
    store.select('app').subscribe(state => {
      this.flashMessage$ = state.flashMessage;
    });
  }

  ngOnInit() {
  }

  flashMessageClasses() {
    if(this.flashMessage$) {
      return `flash-card flash-card-${this.flashMessage$['type']}`;
    }

    return '';
  }

}
