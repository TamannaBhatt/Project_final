"use strict";
var states_collection_1 = require('../../../both/collections/states.collection');
Meteor.methods({
    'removeProductsIdssss': function (productId) {
        states_collection_1.state.remove({ productId: productId, userId: Meteor.userId() });
    },
    'insertProductsIdssss': function (productId) {
        states_collection_1.state.insert({ productId: productId, userId: Meteor.userId() });
    },
});
//# sourceMappingURL=states.js.map