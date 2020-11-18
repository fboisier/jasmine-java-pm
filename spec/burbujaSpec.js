function burbuja(lista) {
    
    var n, i, k, aux;
    n = lista.length;

    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }

    return lista;

}


function burbujaDojo(arreglo) {
    //recorreremos todos los elementos hasta n-1
    for (var i = 1; i < (arreglo.length); i++) {
        //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
        for (var j = 0; j < (arreglo.length - i); j++) {

            //comparamos
            if (arreglo[j] > arreglo[j + 1]) {
                //guardamos el numero mayor en el auxiliar
                var aux = arreglo[j];
                //guardamos el numero menor en el lugar correspondiente
                arreglo[j] = arreglo[j + 1];
                //asignamos el auxiliar en el lugar correspondiente
                arreglo[j + 1] = aux;
            }
        }
    }
    return arreglo;
}

describe("SET DE PRUEBAS del metodo burbuja de internet!", function() { 
    it("PRUEBA 1 : Basica.", function() { 
        expect(burbuja([5,2,1,4])).toEqual([1,2,4,5]); 
    }); 

    it("PRUEBA 2 :  Son iguales.", function() { 
        expect(burbuja([1,2,3,4])).toEqual([1,2,3,4]); 
    }); 

    it("PRUEBA 3 : Numero Gigante.", function() { 
        expect(burbuja([10000,2,1,45])).toEqual([1,2,45,10000]); 
    }); 
});

describe("SET DE PRUEBAS del metodo burbuja de Nosotros!", function() { 
    it("PRUEBA 1 : Basica.", function() { 
        expect(burbujaDojo([5,2,1,4])).toEqual([1,2,4,5]); 
    }); 

    it("PRUEBA 2 :  Son iguales.", function() { 
        expect(burbujaDojo([1,2,3,4])).toEqual([1,2,3,4]); 
    }); 

    it("PRUEBA 3 : Numero Gigante.", function() { 
        expect(burbujaDojo([10000,2,1,45])).toEqual([1,2,45,10000]); 
    }); 

    it("no debe retornar [1,2,45,10000] cuando el parametro de entrada es [1,2,1,45]  ", function() { 
        expect(burbujaDojo([1,2,1,45])).not.toEqual([1,2,45,10000]); 
    }); 


});

