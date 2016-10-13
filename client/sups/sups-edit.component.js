import template from './sups-edit.html';

import SupsEditController from './sups-edit.controller';

const supsEditComponent = {
    template,
    bindings: {
        save: '&',
    },
    controller: SupsEditController,
    controllerAs: 'supsEditCtrl',
};

export default supsEditComponent;
