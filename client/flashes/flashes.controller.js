// # The controller for `<flashes />`

// Uses dependency injection to get the `flashesService`.
// See [https://docs.angularjs.org/guide/di](https://docs.angularjs.org/guide/di)
// for documentation on dependency injection in Angular.
function FlashesController(flashesService) {
    // Convention in this Angular application is to set the variable `ctrl`
    // equal to `this`. Generally, it is done so functions defined in the
    // controller have access to `this` as `ctrl` inside the function.
    const ctrl = this;

    // Expose the array `.flashes` return by the service to the template.
    // This way the template can use an `ng-repeat` to display every message
    // in the array.
    ctrl.flashes = flashesService.flashes;
}

// Export the controller so that `./flashes.component.js` can import it.
export default FlashesController;

// ## Related
// * [flashes.component.js](flashes.component.js.html) -
// The component definition for flashes which groups this controller
// with the flashes template.
// * [flashes.service.js](flashes.service.js.html) -
// The flashes service which globally keeps track of messages and exposes a function
// other controllers to add messages to be displayed by this component.

