import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { ProductService } from '../../services/common/models/product.service';
import { AlertifyMessageType, AlertifyPosition, AlertifyService } from '../../services/admin/alertify.service';

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
    private productService: ProductService) {

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
  @Output() callback: EventEmitter<any> = new EventEmitter();

  // silme işlemi için hostlistener dinleyecek click adlı event i
  @HostListener("click")
  async onClick() {
    const td: HTMLTableCellElement = this.element.nativeElement;
    await this.productService.delete(this.id);
    $(td.parentElement).fadeOut(1750, () => {
      this.callback.emit();
    });
    this.alertifyService.message("Product silinmiştir.",{
      alertifyType: AlertifyMessageType.warning,
      dismissOthers: true,
      alertifyposition: AlertifyPosition.topright
    })

  }

}
