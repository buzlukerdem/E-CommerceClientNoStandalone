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
    console.log(this.data);
    
  }

  @Output() options: Partial<FileUploadOptions> = {
    accept: ".png, .jpg, .jpeg,",
    controller: "products",
    action: "upload",
    queryString: `id=${this.data}`,
    // queryString: "7a809bcb-3eaf-49a5-bdd9-4b0c6afe4453",
    isAdminPage: true,
    explanation: "Choose Product Images",
    // queryString: "",
    
    
  };

  
}

export enum SelectProductImageState {
  Close
}
