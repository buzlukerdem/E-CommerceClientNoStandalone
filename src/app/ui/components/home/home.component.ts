import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(spinnerService: NgxSpinnerService) {
    super(spinnerService);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.SquareJellyBox,1000)
  }
}
