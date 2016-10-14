
function supsAPIService($resource) {
    const api = {
        sups: $resource('/api/sups/:id/'),
    };

    return api;
}

export default supsAPIService;
