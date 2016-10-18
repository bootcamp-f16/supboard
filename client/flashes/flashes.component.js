// # The `<flashes />` component
// The flashes component displays messages tracked by the flashes service.

// See [`./flashes.html`](https://github.com/bootcamp-f16/supboard/blob/master/client/flashes/flashes.html)
// for the template. The template is a ng-repeat over all the flash messages to display them
// using the Bootstrap `alert`. See [http://getbootstrap.com/components/#alerts](http://getbootstrap.com/components/#alerts)
// for documentation of Bootstrap alerts.
import template from './flashes.html';

// The controller that gets the flashes from the flashes service as an array.
import FlashesController from './flashes.controller';

// Defining the component as an object. `flashes.module` registers this component with the
// flashes Angular module.
const flashesComponent = {
    template,
    controller: FlashesController,
    controllerAs: 'flashesCtrl',
};

export default flashesComponent;

// ## Related
// * [../app/app.html](https://github.com/bootcamp-f16/supboard/blob/master/client/app/app.html) -
// Usage of the `<flashes />` component.
// * [`./flashes.html`](https://github.com/bootcamp-f16/supboard/blob/master/client/flashes/flashes.html) -
// The template for the `<flashes />` component.
// * [flashes.module.js](flashes.module.js.html) - Registering the flashes component with the
// flashes Angular Module.
// * [flashes.controller.js](flashes.controller.js.html) - The controller for `flashes` component.
