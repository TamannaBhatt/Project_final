"use strict";
var mongo_1 = require('meteor/mongo');
exports.state = new mongo_1.Mongo.Collection('states');
exports.state.allow({
    insert: loggedIn,
    remove: loggedIn
});
function loggedIn() {
    return !!Meteor.user();
}
