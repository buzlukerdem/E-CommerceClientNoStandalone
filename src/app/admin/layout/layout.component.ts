import { Component, OnInit } from '@angular/core';
import {  AlertifyMessageType, AlertifyPosition, AlertifyService } from '../../services/admin/alertify.service';
// declare var alertify: any


@Component({
  selector: 'app-layout',
  standalone: false,

  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent  {

  // constructor(private alertify2: AlertifyService) {
  // }
  // ngOnInit(): void {
  //   this.alertify2.message
  //   ("selam",{alertifyposition: AlertifyPosition.topleft,alertifyType: AlertifyMessageType.success});
  // }

}
