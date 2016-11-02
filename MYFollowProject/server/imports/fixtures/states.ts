import { states } from '../../../both/collections/states.collection';
import { Meteor } from 'meteor/meteor';

export function states(){
Meteor.methods({
    'removeProductsId': function(productId){
      states.remove({ productId: productId, userId: Meteor.userId() });
     
    },
    
    'insertProductsId':function(productId){
      states.insert({ productId: productId, userId: Meteor.userId() });
     
    },
});
}