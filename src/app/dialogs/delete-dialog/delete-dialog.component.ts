import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseDialog } from '../base/base-dialog';

@Component({
  selector: 'app-delete-dialog',
  standalone: false,

  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent extends BaseDialog<DeleteDialogComponent> {

  constructor(
    dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteState,
  ) {
    super(dialogRef);
  }

  // readonly dialogRef = inject(MatDialogRef<DeleteDialogComponent>);
  // readonly data: DeleteState = inject(MAT_DIALOG_DATA);

  // close(): void {
  //   this.dialogRef.close();
  // }
}

export enum DeleteState {
  Yes,
  No
}
