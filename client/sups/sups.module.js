import angular from 'angular';
import 'angular-resource';
import 'angular-animate';

import FlashesModule from '../flashes/flashes.module';

import supsPageComponent from './sups-page.component';
import supsItemComponent from './sups-item.component';
import supsEditComponent from './sups-edit.component';

import supsAPIService from './sups-api.service';

const SupsModule = angular.module('sups', [
    'ngResource',
    'ngAnimate',
    FlashesModule.name,
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('supsAPIService', supsAPIService)
    .component('supsPage', supsPageComponent)
    .component('supsEdit', supsEditComponent)
    .component('supsItem', supsItemComponent);

export default SupsModule;
