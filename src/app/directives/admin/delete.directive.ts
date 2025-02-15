import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { ProductService } from '../../services/common/models/product.service';
import { AlertifyMessageType, AlertifyPosition, AlertifyService } from '../../services/admin/alertify.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any

@Directive({
  selector: '[appDelete]',
  standalone: false
})
export class DeleteDirective {

  // ListComponent.html deki delete container'ın TD tagına özel bir directive silme işlemi
  // Event source img vs özelleştireceğiz.

  // html nesnesini elde etme: ElementRef
  // manipüle etme: Renderer
  // delete için HttpclientServis: HttpClientService
  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private alertifyService: AlertifyService,
    // private productService: ProductService,
    private httpClientService: HttpClientService,
    private dialog: MatDialog
  ) {

    //img nesnesini verme
    // const img = _renderer.createElement("img");
    // img.setAttribute('src', 'assets/delete.png');
    // img.setAttribute("style", "cursor: pointer;");
    // img.height = 30;
    // img.width = 30;
    // _renderer.appendChild(element.nativeElement, img)
    const button = _renderer.createElement("button");
    button.innerHTML = "SİL";
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-danger");

    // button.type = 'button';
    // button.textContent = 'btn btn-danger';
    // button.setAttribute("name", "SİL")
    _renderer.appendChild(element.nativeElement, button);
  }

  @Input() id: string;
  @Input() controller: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  // silme işlemi için hostlistener dinleyecek click adlı event i
  @HostListener("click")
  async onClick() {
    this.openDialog(async () => {
      const td: HTMLTableCellElement = this.element.nativeElement;
      await this.httpClientService.delete({
        controller: this.controller,
      }, this.id).subscribe(data => {
        $(td.parentElement).fadeOut(1750, () => {
          this.callback.emit();
          this.alertifyService.message("Product silinmiştir.", {
            alertifyType: AlertifyMessageType.warning,
            dismissOthers: true,
            alertifyposition: AlertifyPosition.topright
          });
        });
      }, (errorResponse: HttpErrorResponse) => {
        this.alertifyService.message("Silme işleminde hatayla karşılaşıldı.", {
          alertifyType: AlertifyMessageType.error,
          dismissOthers: true,
          alertifyposition: AlertifyPosition.topright
        });
      });
    });
  }

  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: "250px",
      // açılırken yes ile.
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == DeleteState.Yes) {
        afterClosed();
      }
    });
  }

}
