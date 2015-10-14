var app = angular.module("App", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'HomeController'
        })

        // route for the about page
        .when('/user', {
            templateUrl : 'views/user.html'
            //controller  : 'KigengeController'
        })
        .when('/help', {
            templateUrl : 'partials/help.html',
            controller  : 'HelpController'
        })
        .when('/settings', {
            templateUrl : 'partials/settings.html',
            controller  : 'SettingsController'
        })
        .otherwise('/');
});