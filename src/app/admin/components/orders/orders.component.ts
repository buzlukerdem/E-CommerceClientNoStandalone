import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-orders',
  standalone: false,

  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent extends BaseComponent implements OnInit {
  constructor(spinnerService: NgxSpinnerService) {
    super(spinnerService);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.Cog,1200)
  }
}
