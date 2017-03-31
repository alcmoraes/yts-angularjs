(function (define, angular) {
    'use strict';

    define(
            ['angular-resource'],
            angular.module('yifyServices', ['ngResource'])
            .factory('yifyService', yifyService)
            );
    /**
     * Serch Service
     */
    yifyService.$inject = ['$resource'];
    function yifyService($resource) {

        // var crossOriginProxy = 'https://crossorigin.me/';
        var crossOriginProxy = '';
        // Temporary fix. Should test all three and use only the available
        var endPoints = [
            'https://yts.ag/api/',
            'https://yts.re/api/',
            'https://yts.pm/api/',
            'https://yts.io/api/'
        ];

        var currentEndPoint = 0;

        return {
            List: $resource(crossOriginProxy + endPoints[currentEndPoint] + 'v2/list_movies.json', {}, {}),
            Detail: $resource(crossOriginProxy + endPoints[currentEndPoint] + 'v2/movie_details.json', {}, {}),
            Upcoming: $resource(crossOriginProxy + endPoints[currentEndPoint] + 'v2/list_upcoming.json', {}, {})
        };
    }

})(define, angular);
