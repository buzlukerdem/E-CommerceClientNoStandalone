import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  standalone: false,

  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {

  constructor() {

  }

  readonly dialogRef = inject(MatDialogRef<DeleteDialogComponent>);
  readonly data: DeleteState = inject(MAT_DIALOG_DATA);

  close(): void {
    this.dialogRef.close();
  }
}

export enum DeleteState {
  Yes,
  No
}
