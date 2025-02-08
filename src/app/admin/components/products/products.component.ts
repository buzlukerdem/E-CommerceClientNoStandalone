import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { Product } from '../../../contracts/product';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinnerService: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinnerService);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.Cog, 1200);


    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "DummyProduct3",
    //   stock: 300,
    //   price: 5999
    // }).subscribe();

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "DummyProduct4",
    //   stock: 400,
    //   price: 8999
    // }).subscribe();

    // this.httpClientService.put({
    //   controller: "products"
    // },
    //   {
    //     id: "0194e7a0-e499-7470-b7c6-f512d51a10d4",
    //     name: "DummyProduct5",
    //     price: 500,
    //     stock: 50
    //   }).subscribe();

    // this.httpClientService.put({
    //   controller: "products"
    // },
    //   {
    //     id: "0194e7a0-f636-7b7b-9b41-cad0c7d6cb4b",
    //     name: "DummyProduct6",
    //     price: 600,
    //     stock: 60
    //   }).subscribe();

    // this.httpClientService.put({
    //   controller: "products"
    // },
    //   {
    //     id: "0194e7a0-f636-74e0-a2f4-a86c48f928bb",
    //     name: "DummyProduct7",
    //     price: 700,
    //     stock: 70
    //   }).subscribe();

    // this.httpClientService.delete({
    //   controller: "products"
    // }, "0194e7b6-1bb1-7b73-92b9-2163655bbe69").subscribe();

    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));
  }
}
