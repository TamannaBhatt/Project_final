import {Mongo} from 'meteor/mongo';
 
export const state = new Mongo.Collection('statesAppsss');

state.allow({
    insert:loggedIn,
    remove:loggedIn
})

function loggedIn() {
      return !!Meteor.user();
    }
