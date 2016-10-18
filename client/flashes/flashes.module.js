// # Flashes module
// This module defines a component for displaying flash messages and
// a service for adding messages to be displayed.

// Import angular to define the module using `angular.module`
import angular from 'angular';
// `angular-animate` manages css classes on HTML elements as they are added,
// removed, or moved around the DOM. Along with the styles defined in
// `static/styles.css` provides the slide in, slide out animation for flash
// messages.
import 'angular-animate';

import flashesComponent from './flashes.component';
import flashesService from './flashes.service';

const FlashesModule = angular.module('flashes', [
    // Adds angular animate as a dependency of this module.
    'ngAnimate',
])
    // Registers `flashesService` as a factory.
    // See [http://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html](http://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html)
    // on the differences between register as a factory vs. a service.
    // The important part to remember is with factory, the controllers using `flashesService`
    // get access to whatever is **returned** by the `flashesService` function.
    .factory('flashesService', flashesService)
    // Register the component, `flashes`, so it can be used in HTML as `<flashes />`.
    .component('flashes', flashesComponent);

// Export the module so it can be imported in `app.module`
export default FlashesModule;

// ## Related
// * [flashes.component.js](flashes.component.js.html) -
// The component definition for flashes which groups this controller
// with the flashes template.
// * [`./flashes.html`](https://github.com/bootcamp-f16/supboard/blob/master/client/flashes/flashes.html) -
// The template for the `<flashes />` component.
// * [flashes.controller.js](flashes.controller.js.html) - The controller for `flashes` component.
// * [flashes.service.js](flashes.service.js.html) -
// The flashes service which globally keeps track of messages and exposes a function
// other controllers to add messages to be displayed by this component.
