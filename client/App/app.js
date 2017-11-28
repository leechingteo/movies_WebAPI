'use strict';

// Declares how the application should be bootstrapped. See: http://docs.angularjs.org/guide/module
angular.module('app',
    [
        // Dependency Inject Goes inside this array
        'ui.router',  // we inject/load ui-router for routing
        'app.controllers', // we inject/load the controllers
    ]
)
    .config(['$stateProvider',
        function ($stateProvider) {
            // UI States, URL Routing & Mapping. For more info see: https://github.com/angular-ui/ui-router

            // our routers, self explanatory
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/View/Home.html',
                    controller: 'searchMovies'
                })
                .state('details', {
                    url: '/details',
                    templateUrl: '/View/Movies.html',
                    controller: 'MoviesController'
                })
                .state('title1', {
                    url: '/title/tt6078842',
                    templateUrl: '/View/details.html',
                    controller: 'Page1_Controller'
                })
                .state('title', {
                    url: '/title/tt0892769',
                    templateUrl: '/View/details.html',
                    controller: 'PageController'
                })
                .state('title2', {
                    url: '/title/tt0245429',
                    templateUrl: '/View/details.html',
                    controller: 'Page_Controller'
                })
                .state('title3', {
                    url: '/title/tt0347149',
                    templateUrl: '/View/details.html',
                    controller: 'Page2_Controller'
                })
                .state('title5', {
                    url: '/title/tt2907640',
                    templateUrl: '/View/details.html',
                    controller: 'Page5_Controller'
                })
                .state('title6', {
                    url: '/title/tt5311514',
                    templateUrl: '/View/details.html',
                    controller: 'Page6_Controller'
                })
                 .state('title7', {
                    url: '/title/tt3501632',
                    templateUrl: '/View/details.html',
                    controller: 'Page7_Controller'
                })
                 .state('title8', {
                    url: '/title/tt2250912',
                    templateUrl: '/View/details.html',
                    controller: 'Page8_Controller'
                })
                
                .state('search', {
                    url: '/search',
                    templateUrl: '/View/search.html',
                    controller: 'SearchController'
                })
               
                .state('otherwise', {
                    url: '*path',
                    templateUrl: '/View/Error.html',
                    controller: 'ErrorCtrl'
                });
        }]

        );
        
         
