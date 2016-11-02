import { Component} from '@angular/core';
import{ Router} from '@angular/router';
import template from './registration.component.html';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import {User,Profile} from './user.model';
@Component({
     template,
   // directives: [ROUTER_DIRECTIVES]
})
export class RegistrationComponent  { 
    public user: User= new User();
    public profile: Profile= new Profile();

    constructor(private router: Router) {}
    

    submit()
     {    
        
         this.user.profile = this.profile;
        // console.log(this.user);
          Accounts.createUser({ 
             username:this.user.username, 
             email :this.user.email,
             password :this.user.password,
             profile  : this.user.profile
             });
         this.router.navigate(['/Submit']);
     }  

      
}