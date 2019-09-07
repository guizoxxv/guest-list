import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { ApiService } from '../../services/api.service';
import { FlashMessage, RemoveFlashMessage } from '../../actions/app.action';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlashMessageInterface } from '../../interfaces/flahMessage.interface';
import { EventNameSet, GuestsSet } from '../../actions/guest-list.action';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  editEventForm: FormGroup;
  eventId: string;
  flashMessage$: Observable<FlashMessageInterface>;
  eventName$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    store.select('app').subscribe(state => {
      this.flashMessage$ = state.flashMessage;
    });

    this.eventId = this.route.snapshot.paramMap.get('eventId');
  }

  ngOnInit() {
    this.apiService.getEvent(this.eventId)
      .subscribe(res => {
        this.store.dispatch(new EventNameSet(res['name']));
        this.store.dispatch(new GuestsSet(res['guests']));
      });

    this.store.select('guestList').subscribe(state => {
      this.editEventForm = this.fb.group({
        name: [state.eventName, Validators.required],
        guests: this.fb.array(state.guests.map(item => {
          return this.fb.group({
            name: [item.name, Validators.required],
          })
        })),
      });
    });
  }

  get guestsForms() {
    return this.editEventForm.get('guests') as FormArray;
  }

  addGuest() {
    const guest = this.fb.group({
      name: ['', Validators.required],
    });

    return this.guestsForms.push(guest);
  }

  removeGuest(i: number) {
    this.guestsForms.removeAt(i);
  }

  onSubmit() {
    let store = this.store;

    this.apiService.updateEvent(this.eventId, this.editEventForm.value)
      .subscribe(res => {
        store.dispatch(new FlashMessage({
          type: 'success',
          text: 'Event updated.'
        }));

        this.router.navigate([`/events/${this.eventId}/edit`]);

        setTimeout(function () {
          store.dispatch(new RemoveFlashMessage());
        }, 5000);
      }, err => {
        if (err.error.name === "ValidationError") {
          const validationErrors = err.error.errors;

          Object.keys(validationErrors).forEach(prop => {
            const formControl = this.editEventForm.get(prop);

            if (formControl) {
              formControl.setErrors({
                serverError: validationErrors[prop].message
              });
            }
          });
        } else {
          // TODO: Show generic error dialog
        }
      });
  }

}