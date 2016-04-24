app.controller('PostsController', [
    '$scope',
    '$stateParams',
    'postsService',
    function($scope, $stateParams, postsService){
        $scope.post = postsService.posts[$stateParams.id];
        $scope.addComment = function () {
            if($scope.body === ''){
                return;
            }
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body = '';
        }
    }
]);