import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  editEventForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.editEventForm = this.fb.group({
      name: ['', Validators.required],
      guests: this.fb.array([]),
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
    console.log(this.editEventForm.value);
  }

}
