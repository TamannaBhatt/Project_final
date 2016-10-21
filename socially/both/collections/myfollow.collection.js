"use strict";
var mongo_1 = require('meteor/mongo');
exports.myfollowApp = new mongo_1.Mongo.Collection('myfollowsAppsss');
function loggedIn() {
    return !!Meteor.user();
}
exports.myfollowApp.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});
//# sourceMappingURL=myfollow.collection.js.map