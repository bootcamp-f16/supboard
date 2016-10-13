import angular from 'angular';

import flashesComponent from './flashes.component';
import flashesService from './flashes.service';

const FlashesModule = angular.module('flashes', [])
    .factory('flashesService', flashesService)
    .component('flashes', flashesComponent);

export default FlashesModule;
