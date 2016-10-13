import angular from 'angular';
import 'angular-resource';

import supsPageComponent from './sups-page.component';
import supsItemComponent from './sups-item.component';

import supsAPIService from './sups-api.service';

const SupsModule = angular.module('sups', [
    'ngResource',
])
    .factory('supsAPIService', supsAPIService)
    .component('supsPage', supsPageComponent)
    .component('supsItem', supsItemComponent);

export default SupsModule;
