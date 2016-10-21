"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
var app_routes_1 = require('./app.routes');
var add_product_component_1 = require('../../add-product.component');
var first_component_1 = require('../../first.component');
var login_component_1 = require('../../login.component');
var product_list_component_1 = require('../../product-list.component');
var registration_component_1 = require('../../registration.component');
var update_product_component_1 = require('../../update-product.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                //RectiveFormModule
                router_1.RouterModule.forRoot(app_routes_1.routes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                first_component_1.FirstComponent,
                login_component_1.LoginComponent,
                add_product_component_1.AddProductComponent,
                product_list_component_1.ProductListComponent,
                registration_component_1.RegistrationComponent,
                update_product_component_1.UpdateProductComponent,
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map