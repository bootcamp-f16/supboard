// # App Angular Module
// `AppModule` is the main Angular Module for the Angular application. All other modules
// used are dependencies of this one. See [https://docs.angularjs.org/guide/module](https://docs.angularjs.org/guide/module)
// for documentation on Angular Modules.

// Import angular to define the module.
import angular from 'angular';

// Custom Angular modules that `app` depends on.
import SupsModule from '../sups/sups.module';
import FlashesModule from '../flashes/flashes.module';

// appComponent is our root component in our angular application
// included as <app /> on our index.html page.
import appComponent from './app.component';

// Define our module. The name 'app' is important because it needs
// to match the `ng-app` directive on our home page. See
// [`core/index.html`](https://github.com/bootcamp-f16/supboard/blob/master/templates/core/index.html)
// where the directive is defined

// The first parameter is the name of the Angular module. The second parameter is an array
// of strings of other Angular modules that this module depends on.
const AppModule = angular.module('app', [
    // Angular modules have a `.name` property. This allows the module to be included as
    // a dependency without keeping track of what the module is actually called, keeping
    // the code DRY.
    SupsModule.name,
    FlashesModule.name,
])
    // Register the component `app` with our module. `<app />` can now be used in
    // HTML.
    .component('app', appComponent);

export default AppModule;

// ## Related
// * [/templates/core/index.html](https://github.com/bootcamp-f16/supboard/blob/master/templates/core/index.html) - Usage of the `app` component
// and bootstrapping the Angular application with the `ng-app` directive.
// * [app.component.js](app.component.js.html) - Definition of the `app` component.
