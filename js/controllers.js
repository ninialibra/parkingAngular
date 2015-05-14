//asignamos controlador a la vista
parking.controller("parkingCtrl", function ($scope, $filter){

    $scope.titApartado = "Registro de aparcamiento";

    //array con los coches que aparquen
    $scope.coches = [];

    //array de colores a elegir para los coches
    $scope.colores = ["Pink", "Black", "Blue", "Red", "Grey"];

    $scope.park = function (coche){

        coche.entrada = new Date(); //cogemos fecha
        coche.id = Math.floor((Math.random() * 100) + 1);

        //la matricula viene del input, lo metemos todo en el array
        $scope.coches.push(coche);

        delete $scope.coche;
    };
});

parking.controller("carCtrl", function ($scope, $routeParams){

  //alert($routeParams.id);

  $scope.titApartado = "Ficha de coche";

  

});
