import { NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class ProductListComponent implements OnInit {
    private router;
    private ngZone;
    myfollows: Mongo.Cursor<any>;
    states: Mongo.Cursor<any>;
    products: Mongo.Cursor<any>;
    isProductFollowed: any[];
    isProductUnfollowed: any[];
    followedProduct: any;
    isFollowed: boolean;
    constructor(router: Router, ngZone: NgZone);
    ngOnInit(): void;
    addProduct(): void;
    logOut(): void;
    updateProduct(productId: number): void;
    removeProduct(productId: number): void;
    followProduct(productId: number, userId: string): void;
    unFollowProduct(productId: number): void;
}
