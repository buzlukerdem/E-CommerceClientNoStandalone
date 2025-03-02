import { Component, inject, Inject, Output } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileUploadOptions } from '../../services/common/file-upload/file-upload.component';

@Component({
  selector: 'app-select-product-image-dialog',
  standalone: false,

  templateUrl: './select-product-image-dialog.component.html',
  styleUrl: './select-product-image-dialog.component.scss'
})
export class SelectProductImageDialogComponent extends BaseDialog<SelectProductImageDialogComponent> {

  constructor(dialogRef: MatDialogRef<SelectProductImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectProductImageState | string,
  ) {
    super(dialogRef)

  }

  @Output() options: Partial<FileUploadOptions> = {
    accept: ".png, .jpg, .jpeg,",
    controller: "products",
    action: "upload",
    isAdminPage: true,
    explanation: "Choose Product Images",
    // queryString: "",
    queryString: `id=${this.data}`
  };
}

export enum SelectProductImageState {
  Close
}
