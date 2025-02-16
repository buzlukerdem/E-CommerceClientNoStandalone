import { Component, Input } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AlertifyMessageType, AlertifyPosition, AlertifyService } from '../../admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';

@Component({
  selector: 'app-file-upload',
  standalone: false,

  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  constructor(private httpClientService: HttpClientService, private alertifyService: AlertifyService, private toastrService: CustomToastrService) {
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

    this.httpClientService.post({
      controller: this.options.controller,
      action: this.options.accept,
      queryString: this.options.queryString,
      headers: new HttpHeaders({ "responseType": "blob" })
    }, fileData).subscribe({
      next(data) {
        if(this.options.isAdminPage){
          this.alertifyService.message("Dosya yükleme işlemi gerçekleşmiştir.", {
            alertifyposition: AlertifyPosition.topcenter,
            dismissOthers: true,
            alertifyType: AlertifyMessageType.success
          })
        } else {
          this.toastrService.message("Dosya yüklemeniz başarılı", "Dosya Yükleme", {
            messageType: ToastrMessageType.success,
            position: ToastrPosition.TopCenter
          })
        }
      },
      error(err){
        if (this.options.isAdminPage) {
          this.alertifyService.message("Dosya yükleme işlemi başarısız.", {
            alertifyposition: AlertifyPosition.topcenter,
            dismissOthers: true,
            alertifyType: AlertifyMessageType.error
          })
        } else {
          this.toastrService.message("Dosya yüklemeniz başarısız olmuştur", "Dosya Yükleme", {
            messageType: ToastrMessageType.error,
            position: ToastrPosition.TopCenter
          })
        }
      }
    })



  }
}


export class FileUploadOptions {
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string;
  accept?: string;
  isAdminPage?: boolean = false;
}
