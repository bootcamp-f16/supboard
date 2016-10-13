
function FlashesController(flashesService) {
    const ctrl = this;

    ctrl.flashes = flashesService.flashes;
}

export default FlashesController;
