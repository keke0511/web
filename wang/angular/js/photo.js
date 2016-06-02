var photo = angular.module("photo",[]);
photo.controller("photoCntl", function ($scope) {
    $scope.curr = {
        name : "呵呵",
        currentAct : "美女"
    };
    $scope.names = ["坏蛋","帅哥","美女","美女2","大叔"];
    $scope.photos = ["../img/1.png","../img/2.png","../img/3.png","../img/4.png","../img/5.png"];
    $scope.changePhoto = function(k){
        console.log(k);
        return $scope.photo = $scope.phones[k];
    }
});