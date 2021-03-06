angular.module('app', ['ui.router', 'ngAnimate', 'ngTouch'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: './views/projects.html'
    })
    .state('memberships', {
      url: '/memberships',
      templateUrl: './views/memberships.html'
    })
    .state('ethics', {
      url: '/ethics',
      templateUrl: './views/ethics.html'
    })
    .state('board', {
      url: '/board',
      templateUrl: './views/board.html'
    })
});
