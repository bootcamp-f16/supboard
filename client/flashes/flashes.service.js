// # `flashesService` Service
// Tracks an array of all messages to display called `flashes`.
// Exposes a function, `displayMessage` that allows implementing code to add
// messages to the flashes array. Automates removal of the messages from the
// flashes array after a timeout has elapsed.

// Injects $timeout to remove the message from the `flashes` array after the timeout
// has elapses. See [https://docs.angularjs.org/api/ng/service/$timeout](https://docs.angularjs.org/api/ng/service/$timeout)
// for documentation on $timeout.
function flashesService($timeout) {
    // An array to hold all flash messages to be displayed
    const flashes = [];

    // A function that other code can use to display a message. `message` is the
    // string of text to display and `type` is the type of message. Should be one of
    // the alert contextual colors for Bootstrap. See [http://getbootstrap.com/components/#alerts](http://getbootstrap.com/components/#alerts)
    // for the types available.
    //
    // `displayMessage` also uses the $timeout service to remove the message from the array
    // after 3000 milliseconds.
    function displayMessage(message, type = 'info') {
        const flash = {
            message,
            type,
        };

        flashes.push(flash);

        // () => {} declares an *arrow function*. See
        // [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
        // for doucmentation and examples on ES6 arrow functions.
        $timeout(() => {
            // Finds the flash and removes it from the array of flashes
            const index = flashes.indexOf(flash);
            flashes.splice(index, 1);
        }, 3000);
    }

    // The object returned is what is available when
    // flashesService is used in a controller.
    return {
        flashes,
        displayMessage,
    };
}

// Export the service so `flashes.module` can add the service to the Angular module.
export default flashesService;

// ## Related
// * [flashes.module.js](flashes.module.js.html) - Registering `flashesService` with the
// flashes Angular Module.
// * [flashes.controller.js](flashes.controller.js.html) - Usage of the flashes array.
// * [sups-page.controller.js](../sups/sups-page.controller.js.html) -
// Usage of the displayMessage function.
