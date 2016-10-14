import { findIndex } from 'ramda';

function SupsPageController(supsAPIService, flashesService, $interval) {
    const ctrl = this;
    ctrl.editedSup = {};

    function getSups() {
        supsAPIService.sups.get().$promise.then((data) => {
            ctrl.sups = data.results;
        });
    }

    getSups();
    $interval(getSups, 5000);

    ctrl.saveSup = function saveSup(editedSup) {
        supsAPIService.sups.save(editedSup).$promise.then((savedSup) => {
            ctrl.sups = [
                savedSup,
                ...ctrl.sups,
            ];
            ctrl.editedSup = {};
            flashesService.displayMessage('Sup Created!', 'success');
        });
    };

    ctrl.updateSup = function updateSup(supToUpdate) {
        supsAPIService.sups.update(supToUpdate).$promise.then(() => {
            flashesService.displayMessage('Sup updated!', 'success');
        });
    };

    ctrl.deleteSup = function deleteSup(supToDelete) {
        const findSup = findIndex(item => supToDelete.id === item.id);
        const index = findSup(ctrl.sups);

        if (index !== -1) {
            ctrl.sups.splice(index, 1);
        }

        supsAPIService.sups.delete(supToDelete).$promise.then(() => {
            flashesService.displayMessage('Sup Deleted', 'success');
        });
    };
}

export default SupsPageController;
