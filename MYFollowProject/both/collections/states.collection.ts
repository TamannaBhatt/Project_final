

import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
export const states = new Mongo.Collection('States');

function loggedIn() {
  return !!Meteor.user();
}
 
states.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});


