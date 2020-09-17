import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-framework/category';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  selectedCategory:Category;
  productList:Product;
  constructor(
    private activatedRoute:ActivatedRoute,
    private productsService:ProductsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
    this.selectedCategory = data.id;
    console.log(this.selectedCategory)
    this.productsService.searchCategoryProducts(this.selectedCategory).subscribe(categoryData =>{
      this.productList = categoryData;
      console.log(categoryData);
    })
  });

  
  }

}
