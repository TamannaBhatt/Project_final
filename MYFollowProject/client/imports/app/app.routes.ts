import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent}  from './login.component';
import {FirstComponent} from './first.component';
import {RegistrationComponent} from './registration.component';
import {ProductListComponent} from'./product-list.component';
import {AddProductComponent} from './add-product.component';
export const routes: Route [] = [
     {
        path: '',
         component: FirstComponent
     },
     {
         path: 'Login',
        component: LoginComponent
     },
    {
        path: 'Submit',
        component: ProductListComponent
    },
     {
         path: 'AddProduct',
        component: AddProductComponent
     },
    {
        path: 'Register',
        component: RegistrationComponent
    }
    // {
    //     path: 'Update/:id',
    //     component: UpdateProductComponent
    // },


];
