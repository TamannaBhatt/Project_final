import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { routes } from './app.routes';
import { AddProductComponent} from'../../add-product.component';
import { FirstComponent} from'../../first.component'
import { LoginComponent} from '../../login.component';
import { ProductListComponent  } from '../../product-list.component';
import { RegistrationComponent} from '../../registration.component';
import { UpdateProductComponent} from '../../update-product.component';
import {  FormGroup, FormBuilder, Validators  } from '@angular/forms';

@NgModule({
  imports: [
   BrowserModule,
   //RectiveFormModule
   RouterModule.forRoot(routes),
   FormsModule,
   ReactiveFormsModule

 ],
 declarations: [
   AppComponent,
   FirstComponent,
   LoginComponent, 
  AddProductComponent,
  ProductListComponent,
  RegistrationComponent,
  UpdateProductComponent,
 ],
   bootstrap: [
   AppComponent
   ]
})
export class AppModule {}