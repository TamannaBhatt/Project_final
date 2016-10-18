import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './product.model';
export declare class UpdateProductComponent implements OnInit {
    private formBuilder;
    private router;
    private route;
    sub: any;
    productId: string;
    productName: Mongo.Cursor<any>;
    updateForm: FormGroup;
    product: Product;
    constructor(formBuilder: FormBuilder, router: Router, route: ActivatedRoute);
    ngOnInit(): void;
    resetForm(): void;
    updateProduct(): void;
}
