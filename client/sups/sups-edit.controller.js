
function SupsEditController() {
    const ctrl = this;
    ctrl.editedSup = {};

    ctrl.saveSup = function saveSup() {
        ctrl.save({ editedSup: ctrl.editedSup });
    };
}

export default SupsEditController;
