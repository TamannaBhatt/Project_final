"use strict";
var states_collection_1 = require('../../../both/collections/states.collection');
Meteor.methods({
    'removeProductsIdsss': function (productId) {
        states_collection_1.state.remove({ productId: productId, userId: Meteor.userId() });
    },
    'insertProductsIdsss': function (productId) {
        states_collection_1.state.insert({ productId: productId, userId: Meteor.userId() });
    },
});
//# sourceMappingURL=states.js.map