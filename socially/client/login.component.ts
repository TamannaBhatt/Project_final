import { Component} from '@angular/core';
import {  ROUTER_DIRECTIVES, Router} from '@angular/router';
import template from './login.component.html';
import {User} from './user.model';
@Component({
    template,
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {
    user: any;

    constructor(private router: Router) {
        this.user = new User();
    }

    submit() {
        Meteor.loginWithPassword(this.user.email, this.user.password, (error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log("login");
                location.href = "/Submit";
            }
        });
    }
}