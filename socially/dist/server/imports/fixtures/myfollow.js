"use strict";
var myfollow_collection_1 = require('../../../both/collections/myfollow.collection');
function loadMyfollow() {
    if (myfollow_collection_1.myfollow.find().count() === 0) {
        var myfollows = [];
        myfollows.forEach(function (product) { return myfollow_collection_1.myfollow.insert(product); });
    }
}
exports.loadMyfollow = loadMyfollow;
Meteor.methods({
    'deleteProductId': function (productId) {
        myfollow_collection_1.myfollow.remove({ _id: productId });
    },
    'getproduct': function (productName, productDescription) {
        myfollow_collection_1.myfollow.find({ productName: productName });
        myfollow_collection_1.myfollow.find({ productDescription: productDescription });
    }
});
