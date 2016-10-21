import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
import{Router} from '@angular/router';
import template from './add-product.component.html';
import { myfollowApp } from '../both/collections/myfollow.collection';

@Component({
  
    template,
    //directives: [ROUTER_DIRECTIVES,REACTIVE_FORM_DIRECTIVES]
})
export class AddProductComponent implements OnInit
{
   addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router ) {}
 
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      productName :['', Validators.required],
     productDescription: []
    });
  }
 resetForm() {
    this.addForm.controls['productName']['updateValue']('');
    this.addForm.controls['productDescription']['updateValue']('');
  }
 
  addProduct() {
    if (this.addForm.valid) {
      myfollowApp.insert(this.addForm.value);

      this.resetForm();
      
      this.router.navigate(['/Submit']);
     
    }
     
  }
 
 
}
