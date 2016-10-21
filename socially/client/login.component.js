"use strict";
var core_1 = require('@angular/core');
//import {  ROUTER_DIRECTIVES, Router} from '@angular/router';
//import {Routes, RouterModule} from '@angular/router';
var login_component_html_1 = require('./login.component.html');
var user_model_1 = require('./user.model');
var LoginComponent = (function () {
    function LoginComponent() {
        this.user = new user_model_1.User();
    }
    LoginComponent.prototype.submit = function () {
        Meteor.loginWithPassword(this.user.email, this.user.password, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("login");
                location.href = "/Submit";
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: login_component_html_1.default,
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map