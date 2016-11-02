import { Component, NgZone, OnInit} from '@angular/core';
//import {AddProductComponent} from'./add-product.component';
import { Router } from '@angular/router';
import template from './product-list.component.html';
//import { Products } from '../../../both/collections/myfollow.collection';
//import { Observable } from 'rxjs/Observable'
import { myfollowApp } from '../../../both/collections/myfollow.collection';
import { states } from '../../../both/collections/states.collection';
 
@Component({
  template,
  //directives: [ROUTER_DIRECTIVES, AddProductComponent]
})
export class ProductListComponent implements OnInit {
  myfollows: Mongo.Cursor<any>;
  states:Mongo.Cursor<any>;
  //products: Observable<any[]>;
  products:any[] = [];
  isProductFollowed :any[] = [];
  isProductUnfollowed:any[] = [];
  followedProduct: any;
  isFollowed: boolean;

  constructor(private router: Router, private ngZone: NgZone) {
    Tracker.autorun(() => {
     this.ngZone.run(() => {
     this.products = myfollowApp.find({}).fetch();
      //this.products = Products.find({}).zone();
      this.followedProduct = states.find({ userId: Meteor.userId() }).fetch();
      });
   });
  }

ngOnInit() {}

addProduct() {
    this.router.navigate(['/AddProduct']);
  }

logOut(){
    this.router.navigate(['/Login']);
  }

updateProduct(productId: number){
     this.router.navigate(['/Update',productId]);
  }

removeProduct(productId:number){
  Meteor.call('deleteProductsId',productId);
  Meteor.call('removeProductsId',productId);
  }
 
followProduct(productId: number, userId: string) {
  this.isProductFollowed[productId]  = true;
  this.isProductUnfollowed[productId]  = false;
  Meteor.call('insertProductsId',productId); 
  }

 unFollowProduct(productId: number) { 
   Meteor.call('removeProductsId',productId);
    this.isProductUnfollowed[productId]  = true;
    this.isProductFollowed[productId]  = false;
  }
}
