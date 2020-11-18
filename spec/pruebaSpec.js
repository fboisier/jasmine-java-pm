function suma(a, b){
    return a + b;
}


describe("SET DE PRUEBAS para suma(a,b)", function() { 
    it("Deberia sumar los 2 numeros que pasamos como parametro", function() { 
        expect(suma(2, 5)).toEqual(7); 
    }); 

    it("Deberia sumar los 2 numeros que pasamos como parametro", function() { 
        expect(suma(5, 4)).toEqual(9); 
    }); 

});