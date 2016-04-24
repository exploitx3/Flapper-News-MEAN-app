app.controller('MainController', [
    '$scope',
    'postsService',
    function ($scope, postsService) {
        $scope.posts = postsService.posts;

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