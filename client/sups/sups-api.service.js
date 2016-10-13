
function supsAPIService($resource) {
    const api = {
        sups: $resource('/api/sups/'),
    };

    return api;
}

export default supsAPIService;
