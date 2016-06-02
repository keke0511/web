var list = angular.module("Book",[]);
list.controller("BookListCntl",function($scope){
    $scope.goods = [1,2];
     $.ajax({
        type: "GET",
        url: "http://123.206.90.124/keke/good/getGoodList.do",
        success: function (req) {
            $scope.goods = req.data;
            console.log($scope.goods);
        }
    });

     $scope.books = [
        {name:'遗失的世界',price:36.5},
        {name:'angular指南',price:78.02}
    ];
    console.log($scope.books);
    $scope.addList = function(){

        $scope.books.push(
            {name:'遗失的世界',price:36.5},
            {name:'angular指南',price:78.02}
        );
    }
});

list.controller("personCntl",function($scope){
    $scope.person = {
        name:'张三',
        age:24,
        sex:'男'
    };
});
