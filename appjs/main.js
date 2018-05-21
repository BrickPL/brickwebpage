(function() {

    var app = angular.module('Brick',['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/blockchains', {
            templateUrl: 'pages/blockchains.html',
            controller: 'BlockchainsController',
            controllerAs : 'blockchainsCtrl'
        }).otherwise({
            redirectTo: '/blockchains'
        });
    }]);
})();


