import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-delete-event-dialog',
    templateUrl: './delete-event-dialog.html',
})
export class DeleteEventDialog {

    constructor(
        public dialogRef: MatDialogRef<DeleteEventDialog>
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}