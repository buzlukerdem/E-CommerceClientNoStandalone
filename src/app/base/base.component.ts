import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {

  constructor(private spinnerService: NgxSpinnerService) { }

  showSpinner(spinnerNameType: SpinnerType, spinnerTime: number) {
    this.spinnerService.show(spinnerNameType);

    setTimeout(() => this.hideSpinner(spinnerNameType), spinnerTime);
  }

  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinnerService.hide(spinnerNameType);
  }

}
export enum SpinnerType {
  SquareJellyBox = 'sjelly',
  SquareLoader = "sloader",
  Pacman = "spacman",
  Cog = "scog"
}
