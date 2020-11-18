function usuarioActual() {

    var usuario = {
        nombre: "Francisco",
        edad: 35,
        curso: "Java"
    };

    return usuario;

}

// PARAMETRIZACION DE LAS PRUEBAS
const edadJubilacion = 65; 
const edadAdultez = 18;


describe("usuarioActual", function () {
    it("Debe retornar el usuario actual.", function () {
        expect(usuarioActual()).toEqual({
            nombre: "Francisco",
            edad: 35,
            curso: "Java"
        });
    });

    it("Debe retornar el nombre de usuario igual.", function () {
        expect(usuarioActual().nombre).toEqual("Francisco");
    });

    it("Debería resultar BIEN si el usuario es de edad laboral.", function () {
        expect(usuarioActual().edad).toBeLessThan (edadJubilacion + 1);
        expect(usuarioActual().edad).toBeGreaterThan(edadAdultez - 1);
    });

});