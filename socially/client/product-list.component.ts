import { Component, NgZone, OnInit} from '@angular/core';
import {AddProductComponent} from'./add-product.component';
import { Router } from '@angular/router';
import template from './product-list.component.html';
import { myfollowApp } from '../both/collections/myfollow.collection';
import { state } from '../both/collections/states.collection';
 
@Component({
  template,
  //directives: [ROUTER_DIRECTIVES, AddProductComponent]
})
export class ProductListComponent implements OnInit {
  myfollows: Mongo.Cursor<any>;
  states:Mongo.Cursor<any>;
  products: Mongo.Cursor<any>;
  isProductFollowed :any[] = [];
  isProductUnfollowed:any[] = [];
 // currentUserId: Mongo.Cursor<any>;
  followedProduct: any;
  isFollowed: boolean;

  constructor(private router: Router, private ngZone: NgZone) {
    Tracker.autorun(() => {
     this.ngZone.run(() => {
     this.products = myfollowApp.find();
      this.followedProduct = state.find({ userId: Meteor.userId() }).fetch();
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
  Meteor.call('deleteProductsIdssss',productId);
  Meteor.call('removeProductsIdssss',productId);
  }
 
followProduct(productId: number, userId: string) {
  this.isProductFollowed[productId]  = true;
  this.isProductUnfollowed[productId]  = false;
  Meteor.call('insertProductsIdssss',productId);
  console.log(productId);    
  }

 unFollowProduct(productId: number) { 
   Meteor.call('removeProductsIdssss',productId);
    this.isProductUnfollowed[productId]  = true;
    this.isProductFollowed[productId]  = false;
    console.log(productId);
  }
}
