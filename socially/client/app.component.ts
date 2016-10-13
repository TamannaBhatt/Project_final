import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { myfollow }   from '../both/collections/myfollow.collection';
import { Mongo } from 'meteor/mongo'; 
import template from './app.component.html';

 
@Component({
  selector: 'app',
  template,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  // myfollows: Mongo.Cursor<any>;
  //   constructor() {
  //   this.myfollows = myfollow.find();
  // }
}
