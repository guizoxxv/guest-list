import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  createEventForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.apiService.createEvent(this.createEventForm.value)
      .subscribe(res => {
        // console.log(res);
        // TODO: Redirect with success flash message
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
