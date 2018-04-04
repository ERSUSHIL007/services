app.controller('ctrlApp',
    function($scope, ProductService) {
        //Creating object
        $scope.product = { Id: 1, Name: 'MI', Price: 15000, Qty: 28 };

        //Implement the ProductService
        $scope.totalAmount = ProductService.getTotal($scope.product.Qty, $scope.product.Price);
    });