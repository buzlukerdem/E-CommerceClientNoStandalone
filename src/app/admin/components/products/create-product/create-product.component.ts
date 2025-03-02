import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { ProductService } from '../../../../services/common/models/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyMessageType, AlertifyPosition, AlertifyService } from '../../../../services/admin/alertify.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { FileUploadOptions } from '../../../../services/common/file-upload/file-upload.component';

@Component({
  selector: 'app-create-product',
  standalone: false,

  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent extends BaseComponent implements OnInit {


  constructor(private productService: ProductService, spinner: NgxSpinnerService, private alertify: AlertifyService) {
    super(spinner)
  }
  ngOnInit(): void {
  }

  @Output() createdProduct: EventEmitter<Create_Product> = new EventEmitter();


  create(name: HTMLInputElement, price: HTMLInputElement, stock: HTMLInputElement) {
    this.showSpinner(SpinnerType.Pacman, 1200)
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.price = parseInt(price.value);
    create_product.stock = parseInt(stock.value);

    this.productService.create(create_product, () => {
      this.hideSpinner(SpinnerType.Cog);
      this.alertify.message("Product Ekleme Başarılı", {
        dismissOthers: true,
        alertifyType: AlertifyMessageType.success,
        alertifyposition: AlertifyPosition.topright
      });
      this.createdProduct.emit(create_product);
    }, errorMessage => {
      this.alertify.message(errorMessage, {
        dismissOthers: true,
        alertifyposition: AlertifyPosition.topright,
        alertifyType: AlertifyMessageType.error
      });
    });
  }

}
