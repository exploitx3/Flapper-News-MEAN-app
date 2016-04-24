app.factory('postsService', ['$http',
    function ($http) {
        var result = {};
        result.getAll = function () {
            return $http.get('/posts')
                .success(function (data) {
                    //angular.copy(data, result.posts);
                    result.posts = data;
                })
        };
        result.create = function (post) {
            return $http.post('/posts', post)
                .success(function (data) {
                    result.posts.push(data);
                });
        };
        result.upvote = function (post) {
            return $http.put('/posts/' + post._id + '/upvote')
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

        return result;
    }]);