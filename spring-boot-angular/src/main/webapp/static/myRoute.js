angular.module('indexapp',[])
    .controller('indexController',function ($http,$scope) {
        $http({
            method:'get',
            url:'/spring-boot/index',
        }).then(function successCallback(response) {
            $scope.menus = response.data.menus;
            console.log(response.data.menus)
        },function errorCallback() {

        })
    })
