"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var add_product_component_html_1 = require('./add-product.component.html');
var myfollow_collection_1 = require('../both/collections/myfollow.collection');
var AddProductComponent = (function () {
    function AddProductComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            productName: ['', forms_1.Validators.required],
            productDescription: []
        });
    };
    AddProductComponent.prototype.resetForm = function () {
        this.addForm.controls['productName']['updateValue']('');
        this.addForm.controls['productDescription']['updateValue']('');
    };
    AddProductComponent.prototype.addProduct = function () {
        if (this.addForm.valid) {
            myfollow_collection_1.myfollow.insert(this.addForm.value);
            this.resetForm();
            this.router.navigate(['/Submit']);
        }
    };
    AddProductComponent = __decorate([
        core_1.Component({
            template: add_product_component_html_1.default,
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router])
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
