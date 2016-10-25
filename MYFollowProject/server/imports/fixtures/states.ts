import { states } from '../../../both/collections/states.collection';
import { Meteor } from 'meteor/meteor';

export function states(){
Meteor.methods({
    'removeProductsIdssss': function(productId){
      states.remove({ productId: productId, userId: Meteor.userId() });
     
    },
    
    'insertProductsIdssss':function(productId){
      states.insert({ productId: productId, userId: Meteor.userId() });
     
    },
});
}