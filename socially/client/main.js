"use strict";
require('angular2-meteor-polyfills');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./imports/app/app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
// import { bootstrap } from 'angular2-meteor-auto-bootstrap';
// import { disableDeprecatedForms, provideForms } from '@angular/forms';
// import { AppComponent } from './app.component';
// import { APP_ROUTER_PROVIDERS } from './app.routes';
// bootstrap(AppComponent, [
//   APP_ROUTER_PROVIDERS,
//   disableDeprecatedForms(),
//   provideForms()
// ]); 
//# sourceMappingURL=main.js.map