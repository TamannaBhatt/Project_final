"use strict";
var states_collection_1 = require('../../../both/collections/states.collection');
Meteor.methods({
    'removeProductId': function (productId) {
        states_collection_1.state.remove({ productId: productId, userId: Meteor.userId() });
    },
    'insertProductId': function (productId) {
        states_collection_1.state.insert({ productId: productId, userId: Meteor.userId() });
    },
});
