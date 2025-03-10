import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteDirective } from '../../../directives/admin/delete.directive';
import { DeleteDialogComponent } from '../../../dialogs/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadModule } from '../../../services/common/file-upload/file-upload.module';
import { DialogModule } from '../../../dialogs/dialog.module';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ListProductComponent,
    DeleteDirective
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    DialogModule,
    // fileupload
    FileUploadModule,
    RouterModule.forChild([
      { path: "", component: ProductsComponent }
    ])
  ]
})
export class ProductsModule { }
