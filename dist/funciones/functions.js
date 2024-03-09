"use strict";
(() => {
    function sumar(numUno, numDos) {
        return numUno + numDos;
    }
    const resp = sumar(2, 3);
    // console.log(resp)
    // const heroe =( nombre:string, alias:string ): string =>{
    //     return `Hola ${nombre}, alias ${alias}`;
    // };
    // const superHeroe = heroe('Tony','Ironman');
    // console.log(superHeroe)
    // const nombreCompleto =( nombre?:string, apellido:string ): string =>{ //Incorrecto
    //     return `${nombre || ''} ${apellido}`;
    // };
    // const nombre = nombreCompleto('Tony','Ironman');
    const nombreCompleto = (nombre, apellido) => {
        return `${nombre} ${apellido || ''}`;
    };
    const nombre = nombreCompleto('Tony', 'Stark');
    // console.log(nombre)
    //Parametros por defecto
    const suma = (numberOne = 0, numberTwo = 0) => {
        return numberOne + numberTwo;
    };
    const answer = suma(10, 10);
    // console.log( answer );
    //Rest args o Restos de argumentos
    const fullName = (firstName, ...restArgs) => {
        return firstName + ' ' + restArgs.join(' ');
        // console.log(firstName, restArgs) //Luis [ 'Luna', 'Villa' ]
        // console.log(firstName +' '+ restArgs.join(' ')) //Luis Luna Villa
    };
    // console.log(fullName('Luis','Luna','Villa'))    
    // Tipo de funcion
    const contar = (heroes) => {
        // console.log(heroes)
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    console.log(contar(superHeroes));
})();
//# sourceMappingURL=functions.js.map