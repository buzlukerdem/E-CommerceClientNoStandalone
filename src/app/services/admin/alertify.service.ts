import { Injectable } from '@angular/core';
declare var alertify: any;


@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  message(message: string, options: Partial<AlertifyOptions>) {
    alertify.set('notifier', 'delay', options.delay);
    alertify.set('notifier', 'position', options.alertifyposition);
    const msj = alertify[options.alertifyType](message);
    if (options.dismissOthers)
      msj.dismissOthers();

  }
}

export class AlertifyOptions {
  alertifyType: AlertifyMethod = AlertifyMethod.message;
  alertifyposition: AlertifyPosition = AlertifyPosition.topright;
  delay: number = 3;
  dismissOthers: boolean = false;
}

export enum AlertifyMethod {
  error = "error",
  message = "message",
  notify = "notify",
  success = "success",
  warning = "warning"
}

export enum AlertifyPosition {
  bottomright = "bottom-right",
  bottomleft = "bottom-left",
  bottomcenter = "bottom-center",
  topright = "top-right",
  topleft = "top-left",
  topcenter = "top-center",

}
