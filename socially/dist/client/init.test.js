"use strict";
// angular2-meteor polyfills required for testing
require('angular2-meteor-tests-polyfills');
// Angular 2 tests imports
var testing_1 = require('@angular/platform-browser-dynamic/testing');
var testing_2 = require('@angular/core/testing');
// Init the test framework
testing_2.setBaseTestProviders(testing_1.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, testing_1.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
