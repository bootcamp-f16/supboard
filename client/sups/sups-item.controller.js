
function SupsItemController() {
    const ctrl = this;
    ctrl.showControls = false;

    ctrl.setShowControls = function setShowControls(showControls) {
        ctrl.showControls = showControls;
    };

    ctrl.deleteSup = function deleteSup() {
        ctrl.delete({ supToDelete: ctrl.sup });
    };
}

export default SupsItemController;
