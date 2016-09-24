// ROUTES

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/index.htm'
        , controller: 'homeController'
    }).when('/about', {
        templateUrl: 'pages/about.html'
        , controller: 'aboutController'
    }).when('/contact', {
        templateUrl: 'pages/contact.html'
        , controller: 'contactController'
    }).when('/education', {
        templateUrl: 'pages/education.html'
        , controller: 'educationController'
    }).when('/skills', {
        templateUrl: 'pages/skills.html'
        , controller: 'skillsController'
    }).when('/experience', {
        templateUrl: 'pages/experience.html'
        , controller: 'experienceController'
    }).when('/home', {
        templateUrl: 'pages/home.html'
        , controller: 'homeController'
    })
});