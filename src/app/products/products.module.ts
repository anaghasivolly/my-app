import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';


@NgModule({
  declarations: [
     AddProductComponent,
     ViewProductComponent, 
     ViewAllProductsComponent, 
     UpdateProductComponent, 
     DeleteProductComponent, 
     ViewAllProductsByDateComponent,
     ViewAllProductsByCategoryComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  exports:[ViewAllProductsComponent]
})
export class ProductsModule { }
