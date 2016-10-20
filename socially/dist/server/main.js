"use strict";
var myfollow_1 = require('./imports/fixtures/myfollow');
var meteor_1 = require('meteor/meteor');
require('./imports/fixtures/states');
meteor_1.Meteor.startup(function () {
    myfollow_1.loadMyfollow();
});
