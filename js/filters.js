parking.filter("matricula", function () {
    return function(valor){
        
        var primeraParte = valor.substring(0,4);
        
        alert(typeof primeraParte);
        
        var segundaParte = valor.substring(3);
        
        return primeraParte+"-"+segundaParte;       
    };
});