import angular from 'angular';

import SupsModule from '../sups/sups.module';
import FlashesModule from '../flashes/flashes.module';

import appComponent from './app.component';

const AppModule = angular.module('app', [
    SupsModule.name,
    FlashesModule.name,
])
    .component('app', appComponent);

export default AppModule;
