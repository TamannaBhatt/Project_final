import { Component} from '@angular/core';
import{  ROUTER_DIRECTIVES,Router} from '@angular/router';
import template from './registration.component.html';
import {User,Profile} from './user.model';
@Component({
     template,
   // directives: [ROUTER_DIRECTIVES]
})
export class RegistrationComponent{ 
    public user: User = new User();
    public profile: Profile= new Profile();

    constructor(private router: Router) {}

    submit(userId: number)
     {    
         this.user.profile = this.profile;
        // console.log(this.user);
          Accounts.createUser({   
             email :this.user.email,
             password :this.user.password,
             profile  : this.user.profile
             });
         this.router.navigate(['/Submit']);
     }          
}