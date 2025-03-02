import { Component, Input } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AlertifyMessageType, AlertifyPosition, AlertifyService } from '../../admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadDialogComponent, FileUploadDialogState } from '../../../dialogs/file-upload-dialog/file-upload-dialog.component';
import { DialogService } from '../dialog.service';
import { DeleteState } from '../../../dialogs/delete-dialog/delete-dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-file-upload',
  standalone: false,

  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  constructor(
    private httpClientService: HttpClientService,
    private alertifyService: AlertifyService,
    private toastrService: CustomToastrService,
    private dialog: MatDialog,
    private dialogService: DialogService,
    private spinner: NgxSpinnerService) {
  }

  public files: NgxFileDropEntry[];

  @Input() options: Partial<FileUploadOptions>;

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData: FormData = new FormData();
    for (const file of files) {
      (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
        fileData.append(_file.name, _file, file.relativePath)
      });
    }
    this.dialogService.openDialog({
      componentType: FileUploadDialogComponent,
      data: FileUploadDialogState.Yes,
      afterClosed: () => {

        this.spinner.show(SpinnerType.SquareLoader)
        
        this.httpClientService.post({
          controller: this.options.controller,
          action: this.options.action,
          queryString: this.options.queryString,
          headers: new HttpHeaders({ "responseType": "blob" })
        }, fileData).subscribe(data => {

          this.spinner.hide(SpinnerType.SquareLoader);

          if (this.options.isAdminPage) {
            this.alertifyService.message("Dosya yükleme başarılı", {
              alertifyposition: AlertifyPosition.topcenter,
              alertifyType: AlertifyMessageType.success
            })
          } else {
            this.toastrService.message("Düsya yükleme başarılı", "Success", {
              messageType: ToastrMessageType.success,
              position: ToastrPosition.TopCenter
            })
          }
        }, (errorResponse: HttpErrorResponse) => {
          if (this.options.isAdminPage) {

            this.spinner.hide(SpinnerType.SquareLoader);

            this.alertifyService.message("Dosya yükleme hatalı", {
              alertifyposition: AlertifyPosition.topcenter,
              alertifyType: AlertifyMessageType.error
            })
          } else {
            this.toastrService.message("Düsya yükleme hatalı", "Error", {
              messageType: ToastrMessageType.error,
              position: ToastrPosition.TopCenter
            })
          }
        })
      }
    })
  }
  // openDialog(afterClosed: any): void {
  //   const dialogRef = this.dialog.open(FileUploadDialogComponent, {
  //     width: "250px",
  //     // açılırken yes ile.
  //     data: FileUploadDialogState.Yes,
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result == FileUploadDialogState.Yes) {
  //       afterClosed();
  //     }
  //   });
  // }
}


export class FileUploadOptions {
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string;
  accept?: string;
  isAdminPage?: boolean = false;
}
