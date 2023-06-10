import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { DetailCartComponent } from './home/detail-cart/detail-cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BillComponent } from './home/bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    DetailCartComponent,
    LoginComponent,
    RegisterComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
