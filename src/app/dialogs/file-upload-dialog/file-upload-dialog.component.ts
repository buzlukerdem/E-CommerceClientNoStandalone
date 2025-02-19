import { Component } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload-dialog',
  standalone: false,

  templateUrl: './file-upload-dialog.component.html',
  styleUrl: './file-upload-dialog.component.scss'
})
export class FileUploadDialogComponent extends BaseDialog<FileUploadDialogComponent> {

  constructor(dialogRef: MatDialogRef<FileUploadDialogComponent>) {
    super(dialogRef);

  }
}
