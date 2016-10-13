import { state } from '../../../both/collections/states.collection';

Meteor.methods({
    'removeProductId': function(productId){
      state.remove({ productId: productId, userId: Meteor.userId() });
     
    },
    
    'insertProductId':function(productId){
      state.insert({ productId: productId, userId: Meteor.userId() });
     
    },
});
