import {Mongo} from 'meteor/mongo';
 
export const myfollowApp = new Mongo.Collection('myfollowsAppssss');

function loggedIn() {
  return !!Meteor.user();
}
 
myfollowApp.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});