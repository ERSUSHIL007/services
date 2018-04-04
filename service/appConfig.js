//Inject the Service at the configuration state of the application
//Use the provider() method which is inside the $provide service
app.config(function($provide) {

    $provide.provider('ProductService', function() {
        this.$get = function() {
            //Create Object for the factory
            var fact_Obj = {};

            //Creating function through fact_Obj
            fact_Obj.getTotal = function(qty, price) {
                return qty * price;
            };
            //Return the Object
            return fact_Obj;
        };
    });

});