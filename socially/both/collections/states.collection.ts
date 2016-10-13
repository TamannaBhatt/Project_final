import {Mongo} from 'meteor/mongo';
 
export const state = new Mongo.Collection('states');

state.allow({
    insert:loggedIn,
    remove:loggedIn
})

function loggedIn() {
      return !!Meteor.user();
    }
