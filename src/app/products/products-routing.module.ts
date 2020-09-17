import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';


const routes: Routes = [
  
  { path :'', component: ViewAllProductsComponent},
  { path: 'add-product', component: AddProductComponent },
  { path : 'product/:id', component:ViewProductComponent },
  { path : 'category/:id', component:ViewAllProductsByCategoryComponent },
  { path : 'search-date', component:ViewAllProductsByDateComponent },
  { path :'update-product/:id', component:UpdateProductComponent},
  { path : 'delete-product/:id', component:DeleteProductComponent}
   
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
