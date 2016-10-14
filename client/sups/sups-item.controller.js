import { merge } from 'ramda';

function SupsItemController() {
    const ctrl = this;
    ctrl.showControls = false;
    ctrl.editMode = false;
    ctrl.supToEdit = {};

    ctrl.setShowControls = function setShowControls(showControls) {
        ctrl.showControls = showControls;
    };

    ctrl.setEditMode = function setEditMode(editMode) {
        ctrl.editMode = editMode;

        // merge probably not necessary
        ctrl.supToEdit = merge({}, ctrl.sup);
    };

    ctrl.editSup = function editSup(supToEdit) {
        ctrl.update({ supToUpdate: supToEdit });
        ctrl.sup = supToEdit;
        ctrl.editMode = false;
    };

    ctrl.deleteSup = function deleteSup() {
        ctrl.delete({ supToDelete: ctrl.sup });
    };
}

export default SupsItemController;
