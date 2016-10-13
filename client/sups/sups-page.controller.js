
function SupsPageController(supsAPIService, $interval) {
    const ctrl = this;

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
        });
    };
}

export default SupsPageController;
