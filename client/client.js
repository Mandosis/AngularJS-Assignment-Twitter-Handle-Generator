var app = angular.module('twitterApp', []);

app.controller('twitterController', ['$scope', '$http', function($scope, $http) {
  $scope.noun = "";
  $scope.adjective = "";
  $scope.nameArray = [];


   $scope.nameMaker = function() {
    console.log("nameMaker", 'running');

      $scope.getNoun();

      // $http.get('/adjective').then(function(response) {
      //   console.log(response);
      //   $scope.adjective = response.data;
      // });


   };

   $scope.getNoun = function(){
     $http.get('/noun').then(function(response) {
       console.log('Noun', response);
       $scope.noun = response.data;
       $scope.getAdj(response.data);
     });
   }

   $scope.getAdj = function(noun){
     $http.get('/adjective').then(function(response) {
       console.log('Adjective', response);
       $scope.adjective = response.data;
      //  console.log('Noun before', $scope.noun);
       $scope.makeName(response.data, noun);
     });
   }

   $scope.makeName = function(adjective, noun){
    //  console.log('Making name', $scope.adjective, $scope.noun);
     $scope.nameArray.push({ name: adjective + noun});
   };

   for(var it = 0; it < 10; it++) {
     $scope.nameMaker();
   }


}]);
