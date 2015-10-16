var danAshApp = angular.module('danAshApp', ['ngRoute']);

// configureroutes
danAshApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })

    // route for the ashley and dan page
    .when('/ashdan', {
        templateUrl: 'pages/ashdan.html',
        controller: 'ashdanController'
    })

    // route for the families page
    .when('/families', {
        templateUrl: 'pages/families.html',
        controller: 'familiesController'
    })

    // route for the gifts and dan page
    .when('/gifts', {
        templateUrl: 'pages/gifts.html',
        controller: 'giftsController'
    })

    // route for the location page
    .when('/location', {
        templateUrl: 'pages/location.html',
        controller: 'locationController'
    })
    // route for the packing page
    .when('/packing', {
        templateUrl: 'pages/packing.html',
        controller: 'packingController'
    })

    // route for the rsvp page
    .when('/rsvp', {
        templateUrl: 'pages/rsvp.html',
        controller: 'rsvpController'
    })
    // route for the schedule page
    .when('/schedule', {
        templateUrl: 'pages/schedule.html',
        controller: 'scheduleController'
    })

    // route for the sleep page
    .when('/sleep', {
        templateUrl: 'pages/sleep.html',
        controller: 'sleepController'
    });
});

// create the controller and inject Angular's $scope
danAshApp.controller('mainController', function($scope) {
    $(".nav-link").removeClass("selected");
    $(".wedding-link").addClass("selected");
});

danAshApp.controller('ashdanController', function($scope) {
    $(".nav-link").removeClass("selected");
    $(".ashdan-link").addClass("selected");
});

danAshApp.controller('familiesController', function($scope) {
    $(".nav-link").removeClass("selected");
    $(".families-link").addClass("selected");
});

danAshApp.controller('giftsController', function($scope) {
    $(".nav-link").removeClass("selected");
    $(".gifts-link").addClass("selected");
});

danAshApp.controller('locationController', function($scope) {
    $(".nav-link").removeClass("selected");
    $(".location-link").addClass("selected");
});

danAshApp.controller('packingController', function($scope) {
    $(".nav-link").removeClass("selected");
    $(".packing-link").addClass("selected");
});

danAshApp.controller('rsvpController', function($scope) {
    $(".nav-link").removeClass("selected");
    $(".rsvp-link").addClass("selected");
});

danAshApp.controller('scheduleController', function($scope) {
    $(".nav-link").removeClass("selected");
    $(".schedule-link").addClass("selected");
});

danAshApp.controller('sleepController', function($scope) {
    $(".nav-link").removeClass("selected");
    $(".sleep-link").addClass("selected");
});