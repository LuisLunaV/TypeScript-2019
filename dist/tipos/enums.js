"use strict";
(() => {
    let diasDeLaSemana;
    (function (diasDeLaSemana) {
        diasDeLaSemana[diasDeLaSemana["Domingo"] = 1] = "Domingo";
        diasDeLaSemana[diasDeLaSemana["Lunes"] = 2] = "Lunes";
        diasDeLaSemana[diasDeLaSemana["Martes"] = 3] = "Martes";
        diasDeLaSemana[diasDeLaSemana["Miercoles"] = 4] = "Miercoles";
        diasDeLaSemana[diasDeLaSemana["Jueves"] = 5] = "Jueves";
        diasDeLaSemana[diasDeLaSemana["Viernes"] = 6] = "Viernes";
        diasDeLaSemana[diasDeLaSemana["Sabado"] = 10] = "Sabado";
    })(diasDeLaSemana || (diasDeLaSemana = {}));
    let dia = diasDeLaSemana.Martes;
    // let dia: diasDeLaSemana = diasDeLaSemana.Domingo;
    console.log(dia); // martes -> 3
})();
//# sourceMappingURL=enums.js.map