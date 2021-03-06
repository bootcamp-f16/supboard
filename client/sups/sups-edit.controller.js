import { merge } from 'ramda';

function SupsEditController() {
    const ctrl = this;
    ctrl.editedSup = {};

    ctrl.$onChanges = function $onChanges() {
        // Creates a copy of the ctrl.sup object
        ctrl.editedSup = merge({}, ctrl.sup);
    };

    ctrl.saveSup = function saveSup() {
        ctrl.save({ editedSup: ctrl.editedSup });
    };
}

export default SupsEditController;
