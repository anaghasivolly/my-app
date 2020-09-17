import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = 0;
  productDetails:Product;
  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductsService) { }
    
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.productId= data.id;

      this.productService.viewProduct(this.productId).subscribe(productData =>{
        this.productDetails=productData;
        console.log(productData);
      })
    });
  }
  updateProduct(form)
  {
    console.log(form);

    const updateProduct ={
      
      category_id: form.value.product_category,
        name: form.value.product_name,
        description: form.value.product_description,
        rating: form.value.product_rating,
        price: form.value.product_price,
        productImg: '',
        isAvailable: form.value.product_available,
        color: form.value.product_color,
        reviews: form.value.product_reviews,
    };
    this.productService.updateProduct(this.productId,updateProduct).subscribe(data =>{
      console.log(data);
    });
    }
  }

