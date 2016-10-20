"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_component_html_1 = require('./login.component.html');
var user_model_1 = require('./user.model');
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
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
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
