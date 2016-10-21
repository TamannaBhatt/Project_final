"use strict";
var myfollow_collection_1 = require('../../../both/collections/myfollow.collection');
function loadMyfollow() {
    if (myfollow_collection_1.myfollowApp.find().count() === 0) {
        var myfollows = [];
        myfollows.forEach(function (product) { return myfollow_collection_1.myfollowApp.insert(product); });
    }
}
exports.loadMyfollow = loadMyfollow;
Meteor.methods({
    'deleteProductsIdsss': function (productId) {
        myfollow_collection_1.myfollowApp.remove({ _id: productId });
    },
    'get_productsss': function (productName, productDescription) {
        myfollow_collection_1.myfollowApp.find({ productName: productName });
        myfollow_collection_1.myfollowApp.find({ productDescription: productDescription });
    }
});
//# sourceMappingURL=myfollow.js.map