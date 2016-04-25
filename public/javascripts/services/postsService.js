app.factory('postsService', [
    '$http',
    'authService',
    function ($http, authService) {
        var result = {};
        result.getAll = function () {
            return $http.get('/posts')
                .success(function (data) {
                    //angular.copy(data, result.posts);
                    result.posts = data;
                })
        };
        result.create = function (post) {
            return $http.post('/posts', post,{
                headers: {Authorization: 'Bearer ' + authService.getToken()}
            })
                .success(function (data) {
                    result.posts.push(data);
                });
        };
        result.upvote = function (post) {
            return $http.put('/posts/' + post._id + '/upvote', null,{
                    headers: {Authorization: 'Bearer ' + authService.getToken()}
                })
                .success(function (data) {
                    post.upvotes += 1;
                });
        };

        result.get = function (id) {
            return $http.get('/posts/' + id)
                .then(function (res) {
                    return res.data;
                })
        };

        result.addComment = function (id, comment) {
            return $http.post('/posts/' + id + '/comments', comment,{
                headers: {Authorization: 'Bearer ' + authService.getToken()}
            });
        };

        result.upvoteComment = function (post, comment) {
            return $http.put('/posts/' + post._id + '/comments/' + comment._id + '/upvote', null,{
                    headers: {Authorization: 'Bearer ' + authService.getToken()}
                })
            .success(function (data) {
                comment.upvotes += 1;
            });
        };

        return result;
    }]);