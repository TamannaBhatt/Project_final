import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import template from './update-product.component.html';
import { myfollowApp } from '../../../both/collections/myfollow.collection';
//import {Product} from './product.model';

@Component({
  template,
 // directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class UpdateProductComponent implements OnInit {
  sub: any;
  productId: string;
  productName: Mongo.Cursor<any>;
  updateForm: FormGroup;
  //public product: Product = new Product();

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {

  }
 ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.productId = params['id'];

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
      myfollowApp.update(this.productId, {
        $set: { productName: this.updateForm.value.productName, productDescription: this.updateForm.value.productDescription }
      });
      //this.resetForm();
     this.router.navigate(['/Submit']);
    }
  }
}
