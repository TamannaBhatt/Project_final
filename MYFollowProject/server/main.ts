//import { Main } from './imports/server-main/main';
import {Meteor} from 'meteor/meteor';
import{states} from './imports/fixtures/states';
import {loadMyfollow} from './imports/fixtures/myfollow';


Meteor.startup(() => {
  
  loadMyfollow();
  states();
 
});