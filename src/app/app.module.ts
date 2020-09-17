import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdersModule} from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
//import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GreenbackgroundDirective } from './greenbackground.directive';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailListComponent } from './student-detail-list/student-detail-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreenbackgroundDirective,
    StudentListComponent,
    StudentDetailListComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrdersModule,
    ProductsModule,
    SiteFrameworkModule,
    HttpClientModule,
    //NgxPaginationModule,
    BrowserAnimationsModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
