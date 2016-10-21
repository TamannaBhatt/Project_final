"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var registration_component_html_1 = require('./registration.component.html');
var user_model_1 = require('./user.model');
var RegistrationComponent = (function () {
    function RegistrationComponent(router) {
        this.router = router;
        this.user = new user_model_1.User();
        this.profile = new user_model_1.Profile();
    }
    RegistrationComponent.prototype.submit = function (userId) {
        this.user.profile = this.profile;
        // console.log(this.user);
        Accounts.createUser({
            email: this.user.email,
            password: this.user.password,
            profile: this.user.profile
        });
        this.router.navigate(['/Submit']);
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            template: registration_component_html_1.default,
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map