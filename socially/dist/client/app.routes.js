"use strict";
var router_1 = require('@angular/router');
var first_component_1 = require('./first.component');
var login_component_1 = require('./login.component');
var product_list_component_1 = require('./product-list.component');
var add_product_component_ts_1 = require('./add-product.component.ts');
var registration_component_1 = require('./registration.component');
var update_product_component_1 = require('./update-product.component');
var routes = [
    {
        path: '',
        component: first_component_1.FirstComponent
    },
    {
        path: 'Login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'Submit',
        component: product_list_component_1.ProductListComponent
    },
    {
        path: 'AddProduct',
        component: add_product_component_ts_1.AddProductComponent
    },
    {
        path: 'Register',
        component: registration_component_1.RegistrationComponent
    },
    {
        path: 'Update/:id',
        component: update_product_component_1.UpdateProductComponent
    },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
