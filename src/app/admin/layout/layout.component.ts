import { Component, OnInit } from '@angular/core';
import { AlertifyMethod, AlertifyPosition, AlertifyService } from '../../services/admin/alertify.service';
// declare var alertify: any


@Component({
  selector: 'app-layout',
  standalone: false,

  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  constructor(private alertify2: AlertifyService) {
  }
  ngOnInit(): void {
    this.alertify2.message("selam", {alertifyposition: AlertifyPosition.topcenter,alertifyType: AlertifyMethod.message});
  }

}
