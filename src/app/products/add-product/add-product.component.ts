import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  [x: string]: any;

  constructor(private productsService:ProductsService ) { }
  categoryList:Array<string> = [];
  
  ngOnInit(): void {
    this.listCategory();
  }
  
  listCategory()
  {
    this.productsService.getCategories().subscribe(catData =>{
      catData.forEach(element =>{
        this.categoryList.push(element["categoryName"]);
        console.log(catData);
      })
    });
  }
  addNewProduct(form){
    console.log(form.value);

    let newProduct = {
        id:'',
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

    console.log(newProduct);

    this.productsService.createProduct(newProduct).subscribe(data => {
      console.log(data);
      this.productsService.getCategories().subscribe(catData =>{
        console.log(catData);
      });
    });
    
  }
 
}
