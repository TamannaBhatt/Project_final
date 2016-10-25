import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { routes } from './app.routes';
import {RegistrationComponent} from './registration.component';
import {LoginComponent}  from './login.component';
import {ProductListComponent} from'./product-list.component';
import {AddProductComponent} from './add-product.component';
import{FirstComponent}from'./first.component';
import{UpdateProductComponent} from './update-product.component';
@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    LoginComponent,
    FirstComponent,
    RegistrationComponent,
    ProductListComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
   // DemoDataService
  ],
  // Modules
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AccountsModule

  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
