import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      {
        path: "", component: DashboardComponent
      },
      {
        path: "customers", loadChildren: () => import("./admin/components/customers/customers.module")
          .then(m => m.CustomersModule)
      },
      {
        path: "orders", loadChildren: () => import("./admin/components/orders/orders.module")
          .then(m => m.OrdersModule)
      },
      {
        path: "products", loadChildren: () => import("./admin/components/products/products.module")
          .then(m => m.ProductsModule)
      },
    ]
  },
  { path: "", component: HomeComponent },
  {
    path: "baskets", loadChildren: () => import("./ui/components/baskets/baskets.module")
      .then(m => m.BasketsModule)
  },
  {
    path: "products", loadChildren: () => import("./ui/components/products/products.module")
      .then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
