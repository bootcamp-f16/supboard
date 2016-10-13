
function flashesService($timeout) {
    const flashes = [];

    function displayMessage(message, type = 'info') {
        const flash = {
            message,
            type,
        };

        flashes.push(flash);

        $timeout(() => {
            const index = flashes.indexOf(flash);
            flashes.splice(index, 1);
        }, 3000);
    }

    return {
        flashes,
        displayMessage,
    };
}

export default flashesService;
