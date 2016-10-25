// import { MongoObservable } from 'meteor-rxjs';
// export const Products = new MongoObservable.Collection('products');







import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
export const myfollowApp = new Mongo.Collection('ProductList');

function loggedIn() {
  return !!Meteor.user();
}
 
myfollowApp.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});