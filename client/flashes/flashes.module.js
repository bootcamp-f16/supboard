import angular from 'angular';
import 'angular-animate';

import flashesComponent from './flashes.component';
import flashesService from './flashes.service';

const FlashesModule = angular.module('flashes', [
    'ngAnimate',
])
    .factory('flashesService', flashesService)
    .component('flashes', flashesComponent);

export default FlashesModule;
