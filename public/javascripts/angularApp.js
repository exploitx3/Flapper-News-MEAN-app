var app = angular.module('flapperNews', ['ui.router']);
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home.html',
                controller: 'MainController',
                resolve: {
                    postPromise: ['postsService', function (postsService) {
                        return postsService.getAll();
                    }]
                }
            })
            .state('posts', {
                url: '/posts/{id}',
                templateUrl: '/posts.html',
                controller: 'PostsController',
                resolve: {
                    post: ['$stateParams', 'postsService',
                        function ($stateParams, postsService) {
                            return posts.get($stateParams.id);
                        }]
                }
            });


        $urlRouterProvider.otherwise('home');
    }
]);

