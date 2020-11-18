function saluda(){
    return "HOLA";
}
function burbuja(arreglo) {
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

describe("SET DE PRUEBAS PARA saluda()", function() { 
    it("Debería retorar HOLA cuando yo llame a la funcion saluda()", function() { 
        expect(saluda()).toEqual("HOLA"); 
    }); 
});


describe("SET DE PRUEBAS PARA LA FUNCION burbuja()", function() { 
    it("Deberia devolver el arreglo [9,8,7,6,5,4,3,2,1] ordenado.", function() { 
        expect(burbuja([9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9]); 
    }); 

    it("Deberia devolver el arreglo [3,5,6] ordenado.", function() { 
        expect(burbuja([3,5,6])).toEqual([3,5,6]); 
    }); 

    it("Deberia devolver el arreglo [1000,100,88] ordenado.", function() { 
        expect(burbuja([1000,100,88])).toEqual([88,100,1000]); 
    }); 

    it("Deberia devolver el arreglo [9,8,7,6,5,4,3,2,1] ordenado.", function() { 
        expect(burbuja([9,5,6,11,66,3])).toEqual([3,5,6,9,11,66]); 
    }); 
});