"use strict";
var mongo_1 = require('meteor/mongo');
exports.myfollow = new mongo_1.Mongo.Collection('myfollows');
function loggedIn() {
    return !!Meteor.user();
}
exports.myfollow.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});
