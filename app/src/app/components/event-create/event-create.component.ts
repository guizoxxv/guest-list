import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from "@angular/router"
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { FlashMessage } from '../../actions/app.action';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  createEventForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createEventForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    this.apiService.createEvent(this.createEventForm.value)
      .subscribe(res => {
        this.store.dispatch(new FlashMessage({
          type: 'success',
          text: 'Event created.'
        }));
        
        this.router.navigate(['/events']);
      }, err => {
          if (err.error.name === "ValidationError") {
            const validationErrors = err.error.errors;

            Object.keys(validationErrors).forEach(prop => {
              const formControl = this.createEventForm.get(prop);

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
