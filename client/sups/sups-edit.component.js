import template from './sups-edit.html';

import SupsEditController from './sups-edit.controller';

const supsEditComponent = {
    template,
    bindings: {
        save: '&',
        sup: '<',
    },
    controller: SupsEditController,
    controllerAs: 'supsEditCtrl',
};

export default supsEditComponent;
