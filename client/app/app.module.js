// Import angular so that we can define our module
import angular from 'angular';

// The modules that our main app module will depend on
import SupsModule from '../sups/sups.module';
import FlashesModule from '../flashes/flashes.module';

// appComponent is our root component in our angular application
// included as <app /> on our index.html page
import appComponent from './app.component';

// Define our module. The name 'app' is important because it needs
// to match the `ng-app` directive on our home page. See `core/index.html`
// where the directive is defined
const AppModule = angular.module('app', [
    SupsModule.name,
    FlashesModule.name,
])
    // Register the component `app` with our module. We can now use
    // `<app />` in our html
    .component('app', appComponent);

export default AppModule;
