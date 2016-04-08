var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', '$q', function($scope, $http, $q) {
    $q.all({
        goodMovies: $http.get('/goodMovies'),
        badMovies: $http.get('/badMovies')
    }).then(function(results) {
        console.log('Results', results);
        $scope.badMovies = results.badMovies.data;
        $scope.goodMovies = results.goodMovies.data;
    });
}]);