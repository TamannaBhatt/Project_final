"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var update_product_component_html_1 = require('./update-product.component.html');
var myfollow_collection_1 = require('../both/collections/myfollow.collection');
var product_model_1 = require('./product.model');
var UpdateProductComponent = (function () {
    function UpdateProductComponent(formBuilder, router, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.product = new product_model_1.Product();
    }
    UpdateProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.productId = params['id'];
        });
        this.updateForm = this.formBuilder.group({
            productName: ['', forms_1.Validators.required],
            productDescription: []
        });
    };
    UpdateProductComponent.prototype.resetForm = function () {
        this.updateForm.controls['productName']['updateValue']('');
        this.updateForm.controls['productDescription']['updateValue']('');
    };
    UpdateProductComponent.prototype.updateProduct = function () {
        if (this.updateForm.valid) {
            myfollow_collection_1.myfollow.update(this.productId, {
                $set: { productName: this.updateForm.value.productName, productDescription: this.updateForm.value.productDescription }
            });
            this.resetForm();
            this.router.navigate(['/Submit']);
        }
    };
    UpdateProductComponent = __decorate([
        core_1.Component({
            template: update_product_component_html_1.default,
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute])
    ], UpdateProductComponent);
    return UpdateProductComponent;
}());
exports.UpdateProductComponent = UpdateProductComponent;
