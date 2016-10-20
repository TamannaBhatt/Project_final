import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import{  ROUTER_DIRECTIVES,Router } from '@angular/router';
import {AddProductComponent} from'../../add-product.component';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators  } from '@angular/forms';

@NgModule({
  imports: [
   BrowserModule
 ],
 declarations: [
   AppComponent,
  ROUTER_DIRECTIVES,
  AddProductComponent,
  REACTIVE_FORM_DIRECTIVES
 ],
   bootstrap: [
   AppComponent
   ]
})
export class AppModule {}