app.controller('MainController', [
    '$scope',
    'postsService',
    'authService',
    function ($scope, postsService, authService) {
        $scope.posts = postsService.posts;
        $scope.isLoggedIn = authService.isLoggedIn;

        $scope.incrementUpvotes = function (post) {
            postsService.upvote(post);
        };

        $scope.addPost = function () {
            if (!$scope.title || $scope.title === '') {
                return;
            }
            postsService.create({
                title: $scope.title,
                link: $scope.link
            });
            $scope.title = '';
            $scope.link = '';
        }
    }
]);