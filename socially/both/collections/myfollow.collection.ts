import {Mongo} from 'meteor/mongo';
 
export const myfollow = new Mongo.Collection('myfollows');

function loggedIn() {
  return !!Meteor.user();
}
 
myfollow.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});