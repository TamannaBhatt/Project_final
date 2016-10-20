"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var product_list_component_html_1 = require('./product-list.component.html');
var myfollow_collection_1 = require('../both/collections/myfollow.collection');
var states_collection_1 = require('../both/collections/states.collection');
var ProductListComponent = (function () {
    function ProductListComponent(router, ngZone) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.isProductFollowed = [];
        this.isProductUnfollowed = [];
        Tracker.autorun(function () {
            _this.ngZone.run(function () {
                _this.products = myfollow_collection_1.myfollow.find();
                _this.followedProduct = states_collection_1.state.find({ userId: Meteor.userId() }).fetch();
            });
        });
    }
    ProductListComponent.prototype.ngOnInit = function () { };
    ProductListComponent.prototype.addProduct = function () {
        this.router.navigate(['/AddProduct']);
    };
    ProductListComponent.prototype.logOut = function () {
        this.router.navigate(['/Login']);
    };
    ProductListComponent.prototype.updateProduct = function (productId) {
        this.router.navigate(['/Update', productId]);
    };
    ProductListComponent.prototype.removeProduct = function (productId) {
        Meteor.call('deleteProductId', productId);
        Meteor.call('removeProductId', productId);
    };
    ProductListComponent.prototype.followProduct = function (productId, userId) {
        this.isProductFollowed[productId] = true;
        this.isProductUnfollowed[productId] = false;
        Meteor.call('insertProductId', productId);
        console.log(productId);
    };
    ProductListComponent.prototype.unFollowProduct = function (productId) {
        Meteor.call('removeProductId', productId);
        this.isProductUnfollowed[productId] = true;
        this.isProductFollowed[productId] = false;
        console.log(productId);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            template: product_list_component_html_1.default,
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.NgZone])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
