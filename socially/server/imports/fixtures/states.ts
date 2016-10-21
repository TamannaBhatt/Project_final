import { state } from '../../../both/collections/states.collection';

Meteor.methods({
    'removeProductsIdssss': function(productId){
      state.remove({ productId: productId, userId: Meteor.userId() });
     
    },
    
    'insertProductsIdssss':function(productId){
      state.insert({ productId: productId, userId: Meteor.userId() });
     
    },
});
