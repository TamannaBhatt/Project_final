"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var first_component_html_1 = require('./first.component.html');
//import { LoginButtons } from 'angular2-meteor-accounts-ui';
var FirstComponent = (function () {
    function FirstComponent(router) {
        this.router = router;
    }
    FirstComponent.prototype.login = function () {
        this.router.navigate(['/Login']);
    };
    FirstComponent.prototype.register = function () {
        this.router.navigate(['/Register']);
    };
    FirstComponent = __decorate([
        core_1.Component({
            template: first_component_html_1.default,
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
