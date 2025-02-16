import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }

  message(message: string, title: string, options: Partial<ToastrOptions>) {
    this.toastr[options.messageType](message, title, {
      positionClass: options.position
    });
  }
}

export class ToastrOptions {
  messageType: ToastrMessageType;
  position: ToastrPosition;

}
export enum ToastrMessageType {
  error = "error",
  info = "info",
  success = "success",
  warning = "warning"
};

export enum ToastrPosition {
  TopRight = "toast-top-right",
  TopLeft = "toast-top-left",
  TopFullWidth = "toast-top-full-width",
  TopCenter = "toast-top-center",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-right",
  BottomFullWidth = "toast-bottom-full-width",
  BottomCenter = "toast-bottom-center",
}