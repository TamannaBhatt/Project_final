import { myfollow } from '../../../both/collections/myfollow.collection';
 
export function loadMyfollow() {
  if (myfollow.find().count() === 0) {
    const myfollows = [
    
    ];
 
    myfollows.forEach((product) => myfollow.insert(product));
  }
}
Meteor.methods({

  'deleteProductId': function(productId){
    myfollow.remove({ _id: productId});
   },
   'getproduct':function(productName,productDescription){
     myfollow.find({productName:productName});
      myfollow.find({productDescription:productDescription});
    
   }
});
