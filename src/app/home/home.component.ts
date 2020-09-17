import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { prod } from '../mock-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
  name = "Jacob";
  status ="Please Enter Name";
  isSubmit : boolean = false;

  ProductList = [
    { id :1, name : 'Samsung' },
    { id : 2, name : 'Nokia' },
    { id : 3, name : 'Apple' },
    { id : 4, name : 'vivo'}
  ]
  constructor() { }

  ngOnInit(): void {
  }
 
  Submit(){
    this.isSubmit = true;
  }
  
}
