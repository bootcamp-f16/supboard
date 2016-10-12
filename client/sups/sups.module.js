import angular from 'angular';

import supsPageComponent from './sups-page.component';

const SupsModule = angular.module('sups', [
])
    .component('supsPage', supsPageComponent);

export default SupsModule;
