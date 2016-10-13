import { RouterConfig, provideRouter } from '@angular/router';
import {FirstComponent} from './first.component';
import {LoginComponent} from './login.component';
import { ProductListComponent  } from './product-list.component';
import {AddProductComponent} from'./add-product.component.ts';
import {RegistrationComponent} from './registration.component';
import {UpdateProductComponent} from './update-product.component';

const routes: RouterConfig = [
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
    },
    {
        path: 'Update/:id',
        component: UpdateProductComponent
    },


];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];