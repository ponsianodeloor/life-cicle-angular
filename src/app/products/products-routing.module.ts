import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsPageComponent} from "./pages/products-page/products-page.component";
import {ProductPricePageComponent} from "./pages/product-price-page/product-price-page.component";

const routes: Routes = [
  {
    'path': '',
    children: [
      {
        'path': '',
        component: ProductsPageComponent
      },
      {
        'path': 'product-price',
        component: ProductPricePageComponent
      },
      {
        'path': '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
