"use strict";
;
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovi = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    imprimirBio() {
    }
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad,
            this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
}
//# sourceMappingURL=app.js.map