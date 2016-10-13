import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import template from './first.component.html';
//import { LoginButtons } from 'angular2-meteor-accounts-ui';

@Component({
    
    template,
    directives: [ROUTER_DIRECTIVES]
})
export class FirstComponent 
{
    constructor(private router: Router) {}
    login()
    {
        this.router.navigate(['/Login']);
    }
    
    register(){
        this.router.navigate(['/Register']);    
    }
    
   
}
