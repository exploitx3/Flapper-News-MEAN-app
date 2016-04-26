app.controller('NavController', [
    '$scope',
    'authService',
    function ($scope, authService) {
        $scope.isLoggedIn = authService.isLoggedIn;
        $scope.currentUser = authService.currentUser;
        $scope.logOut = authService.logOut;
    }
]);