//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n){
    var suma = 0; 

    while( n != 0 ){
        suma += n; 
        n--;
    }

    return suma; 
}
//devuelve la suma del primer y último número en el array
function sumFirstLastArturo(arr){
    var ini = arr[0];
    var fin = arr[arr.length - 1];
    var sum = 0;
    sum = ini + fin;

    return sum;
}
    

function sumFirstLastTeresa(arr) {
    var suma = arr[0] + arr[arr.length - 1];
    return suma;
}

function sumFirstLastRony(arr){
        
    for ( var i =0; i<=arr.length; i++){
        arr = arr[0] + arr[arr.length -1];
    }
    return arr;
}

function sumFirstLast(arr){
    return arr[0] + arr[arr.length - 1];
}


describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    });
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 

    it("should return 15 when we pass 5 as an argument", function() { 
        expect(Sum1toN(5)).toEqual(15); 
    }); 

});

describe("sumFirstLastArturo", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLastArturo([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLastArturo([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLastArturo([-6,23,3,-4])).toEqual(-10); 
    }); 
});

describe("sumFirstLastTeresa", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLastTeresa([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLastTeresa([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLastTeresa([-6,23,3,-4])).toEqual(-10); 
    }); 
});

describe("sumFirstLastRony", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLastRony([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLastRony([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLastRony([-6,23,3,-4])).toEqual(-10); 
    }); 
});




describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
});
