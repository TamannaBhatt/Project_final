
import {loadMyfollow} from './imports/fixtures/myfollow';
import {Meteor} from 'meteor/meteor';
import  './imports/fixtures/states';
 
Meteor.startup(() => {
  
  loadMyfollow();
 
});