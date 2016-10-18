// # The `app` component
// `app` is the root component for the entire
// Supboard Angular application. It is being used in:
// [/templates/core/index.html](https://github.com/bootcamp-f16/supboard/blob/master/templates/core/index.html)
// See [Angular Components](https://docs.angularjs.org/guide/component)
// for documentation on components in Angular 1.5.

// Webpack is configured to import HTML files. When Webpack sees an HTML
// extension, it will set the variable, in this case `template`, to string that
// is the contents of the HTML file, `./app.html`.
// The template for `app` has the page and header layout
// then include `<flashes />` component and the `<sup-pages />` component. All components
// for this application are descendants of this component.
import template from './app.html';

// AppController contains the logic behind the `app` component.
import AppController from './app.controller';

// Components are defined by using JavaScript objects in Angular 1.5.
// The object esentially groups together a template with a controller. Components
//  can be used in templates as if they are HTML elements.
const appComponent = {
    template,
    controller: AppController,
    // Using `controllerAs` the template refers to our controller with `appCtrl`.
    // By default Angular will set the `controllerAs` to $ctrl for components, this is overriding
    // that default behavior
    controllerAs: 'appCtrl',
};

// Export app component so that it can be registered with the `app` module.
export default appComponent;

// ## Related
// * [/templates/core/index.html](https://github.com/bootcamp-f16/supboard/blob/master/templates/core/index.html) - Usage of the `app` component.
// * [app.html](https://github.com/bootcamp-f16/supboard/blob/master/client/app/app.html) - The template.
// * [app.module.js](app.module.js.html) - Registering the app component with the
// app Angular Module.
// * [app.controller.js](app.controller.js.html) - The controller for `app` component.
