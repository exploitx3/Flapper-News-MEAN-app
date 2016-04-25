app.controller('PostsController', [
    '$scope',
    'postsService',
    'authService',
    'post',
    function($scope, postsService, authService, post){
        $scope.post = post;
        $scope.isLoggedIn = authService.isLoggedIn;

        $scope.addComment = function () {
            if($scope.body === ''){
                return;
            }
            postsService.addComment(post._id, {
                body: $scope.body,
                author: 'user'
            }).success(function (comment) {
                $scope.post.comments.push(comment);
            });

            $scope.body = '';
        };

        $scope.incrementUpvotes = function (comment) {
            postsService.upvoteComment(post, comment);
        }

    }
]);