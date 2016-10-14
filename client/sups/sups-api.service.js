
function supsAPIService($resource) {
    const api = {
        sups: $resource('/api/sups/:id/',
            // maps a .id on our object to the url above
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }),
    };

    return api;
}

export default supsAPIService;
