import { myfollowApp } from '../../../both/collections/myfollow.collection';

import { Meteor } from 'meteor/meteor';
export function loadMyfollow() {
  if (myfollowApp.find().count() === 0) {
    const myfollows = [
    
    ];
 
    myfollows.forEach((product) => myfollowApp.insert(product));
  }
}
Meteor.methods({

  'deleteProductsIdssss': function(productId){
    myfollowApp.remove({ _id: productId});
   },
   'get_productssss':function(productName,productDescription){
     myfollowApp.find({productName:productName});
      myfollowApp.find({productDescription:productDescription});
    
   }
});
