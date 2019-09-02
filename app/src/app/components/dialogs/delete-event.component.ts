import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteEventInterface } from '../../interfaces/deleteEvent.interface';
import { ApiService } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { EventsSet } from '../../actions/event-list.action';
import { FlashMessage, RemoveFlashMessage } from '../../actions/app.action';

@Component({
    selector: 'app-delete-event-dialog',
    templateUrl: './delete-event-dialog.html',
})
export class DeleteEventDialog {

    constructor(
        public dialogRef: MatDialogRef<DeleteEventDialog>,
        private apiService: ApiService,
        private store: Store<AppState>,
        @Inject(MAT_DIALOG_DATA) public data: DeleteEventInterface
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    confirmDeletion(eventId: string): void {
        let store = this.store;

        this.apiService.deleteEvent(eventId).subscribe(res => {
            this.apiService.getEvents()
                .subscribe(res => {
                    store.dispatch(new EventsSet(res));

                    store.dispatch(new FlashMessage({
                        type: 'success',
                        text: 'Event deleted.'
                    }));

                    setTimeout(function () {
                        store.dispatch(new RemoveFlashMessage());
                    }, 5000);
                });
        });

        this.dialogRef.close();
    }

}