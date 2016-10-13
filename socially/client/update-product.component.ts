import { Component, OnInit} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import {  ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import template from './update-product.component.html';
import { myfollow } from '../both/collections/myfollow.collection';
import {Product} from './product.model';

@Component({
  template,
  directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class UpdateProductComponent implements OnInit {
  sub: any;
  productId: string;
  productName:Mongo.Cursor<any>;
  updateForm: FormGroup;
 // products:Mongo.Cursor<any>;
   public product: Product = new Product();

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    //this.products = myfollow.find();
   // this.productName=myfollow.find({productName:this.productName});
    //console.log(this.productName);
   // this.product.productName='productDescription';
   
    // this.productName= myfollow.find(productName:this.productName);
      //console.log(this.productName);
    
  }

  ngOnInit() {
    // console.log(this.products);
    this.sub = this.route.params.subscribe(params => {
      this.productId = params['id'];
     // this.productName=params['productName'];
    });
    this.updateForm = this.formBuilder.group({
    
      productName: ['', Validators.required],
      productDescription: []
    });
  }

  resetForm() {
    this.updateForm.controls['productName']['updateValue']('');
    this.updateForm.controls['productDescription']['updateValue']('');
  }

  updateProduct() {
    if (this.updateForm.valid) {
      myfollow.update(this.productId, {
        $set: { productName: this.updateForm.value.productName, productDescription: this.updateForm.value.productDescription }
      });
      this.resetForm();
      this.router.navigate(['/Submit']);
    }
  }
}
