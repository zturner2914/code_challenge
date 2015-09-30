var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {

     $scope.repsArray = [];
     $scope.demsArray = [];

    $scope.showSecondButton = false;


    $scope.listCandidates = function() {

        $scope.showSecondButton = true;



        $http({
            method: 'GET',
            url: '/getDems'
        }).then(function successCallback(response) {
            console.log(response);
            $scope.demsArray = response.data;
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

        $http({
            method: 'GET',
            url: '/getReps'
        }).then(function successCallback(response) {
            console.log(response);
            $scope.repsArray = response.data;
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    };
        $scope.showWinner = false;
        $scope.selectWinner = function(){
            $scope.showWinner = true;
       var allCandidates = $scope.repsArray.concat($scope.demsArray);
        console.log(allCandidates);
             $scope.winner = allCandidates[Math.floor(Math.random() * allCandidates.length)].name;
            console.log($scope.winner);

        }


}]);