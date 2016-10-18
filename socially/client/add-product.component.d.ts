import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
export declare class AddProductComponent implements OnInit {
    private formBuilder;
    private router;
    addForm: FormGroup;
    constructor(formBuilder: FormBuilder, router: Router);
    ngOnInit(): void;
    resetForm(): void;
    addProduct(): void;
}
