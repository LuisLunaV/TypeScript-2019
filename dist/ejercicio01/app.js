"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let nivelDeFuerza;
    (function (nivelDeFuerza) {
        nivelDeFuerza[nivelDeFuerza["Acuaman"] = 0] = "Acuaman";
        nivelDeFuerza[nivelDeFuerza["Batman"] = 1] = "Batman";
        nivelDeFuerza[nivelDeFuerza["Flash"] = 5] = "Flash";
        nivelDeFuerza[nivelDeFuerza["superman"] = 100] = "superman";
    })(nivelDeFuerza || (nivelDeFuerza = {}));
    //Es conveniente indicar el tipo de cada elemnto con el valor enum.
    const fuerzaFlash = nivelDeFuerza.Flash;
    const fuerzaSuperman = nivelDeFuerza.superman;
    const fuerzaBatman = nivelDeFuerza.Batman;
    const fuerzaAcuaman = nivelDeFuerza.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map