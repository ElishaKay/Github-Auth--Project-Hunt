var app = angular.module('projectHunt', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

$stateProvider
    .state('home', {
    url: '/home',
    controller: 'mainController',
    templateUrl: './Templates/home.html'
    })
    // .state('dashboard', {
    // url: '/dashboard/:comp',
    // controller: 'projControl',
    // templateUrl:'./Templates/newProjectForm.html',
    // resolve: {
    //       getToDash: ['mainService', '$stateParams' , function(mainService, $stateParams) {
    //         console.log($stateParams.comp);
    //         return mainService.getAllDash($stateParams.comp);
    //       }]
    //     }
    // })
    .state('register', {
    url: '/register',
    controller: 'registerController',
    templateUrl:'./Templates/register.html'
    })
     .state('proj1', {
    url: '/dashboard/proj1',
    controller: 'mainController',
    templateUrl:'./Templates/proj1.html'
    })
     .state('login', {
    url: '/login',
    templateUrl:'./Templates/login.html'
    })
      .state('project', {
    url: '/project',
    controller: 'mainController',
    templateUrl:'./Templates/proj1.html'
    })
      .state('callback', {
    url: '/callback',
    controller: 'loginController',
    templateUrl: './Templates/callback.html'
    });

    $urlRouterProvider.otherwise('/home');

}]);

