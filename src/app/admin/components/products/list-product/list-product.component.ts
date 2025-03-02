import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import { ProductService } from '../../../../services/common/models/product.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { AlertifyMessageType, AlertifyPosition, AlertifyService } from '../../../../services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DialogService } from '../../../../services/common/dialog.service';
import { SelectProductImageDialogComponent } from '../../../../dialogs/select-product-image-dialog/select-product-image-dialog.component';

@Component({
  selector: 'app-list-product',
  standalone: false,

  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent extends BaseComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private alertifyService: AlertifyService,
    spinner: NgxSpinnerService,
    private dialogService: DialogService) {
    super(spinner)
  }

  displayedColumns: string[] = ['id', 'name', 'price', 'stock', 'createdDate', 'updatedDate', 'photos', 'update', 'delete'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: MatTableDataSource<List_Product> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;




  async getProducts() {
    const allProducts: { totalCount: number, products: List_Product[] } = await this.productService.list(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 15, () => errorMessage => {
      this.alertifyService.message(errorMessage, {
        dismissOthers: true,
        alertifyposition: AlertifyPosition.topright,
        alertifyType: AlertifyMessageType.error
      })
    })
    this.dataSource = new MatTableDataSource<List_Product>(allProducts.products);
    this.paginator.length = allProducts.totalCount;
    // this.dataSource.paginator = this.paginator;
  }

  addProductImages(id: string) {
    this.dialogService.openDialog({
      componentType: SelectProductImageDialogComponent,
      data: id,
      options: {
        width: "1400px"
      }
    })
  }

  pageChanged() {
    this.getProducts();
  }

  async ngOnInit() {
    this.getProducts();
  }
}
