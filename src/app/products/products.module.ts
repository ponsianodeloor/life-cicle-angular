import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPricePageComponent } from './pages/product-price-page/product-price-page.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductPricePageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
