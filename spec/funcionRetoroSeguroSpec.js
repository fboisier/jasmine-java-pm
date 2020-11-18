function retornoSeguro(n){
    return 2;
}


describe("SET DE PRUEBAS retornoSeguro", function() { 
    it("deberia retornar 2 cuando le pase 10", function() { 
        expect(retornoSeguro(10)).toEqual(2); 
    }); 
});

