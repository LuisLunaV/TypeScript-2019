(()=>{
    function sumar( numUno: number, numDos: number): number{
        return numUno + numDos;
    }
    
    const resp = sumar(2,3);
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
    
    const nombreCompleto =( nombre:string, apellido?:string ): string =>{ //Incorrecto
    
        return `${nombre} ${apellido || ''}`;
    };
    
    const nombre = nombreCompleto('Tony', 'Stark');
    // console.log(nombre)

    //Parametros por defecto

    const suma =( numberOne:number = 0, numberTwo:number = 0):number =>{
        return numberOne + numberTwo;
    }

    const answer = suma(10,10);

    // console.log( answer );

    //Rest args o Restos de argumentos

    const fullName =( firstName:string, ...restArgs:string []): string =>{

        return firstName +' '+ restArgs.join(' ');
        // console.log(firstName, restArgs) //Luis [ 'Luna', 'Villa' ]
        // console.log(firstName +' '+ restArgs.join(' ')) //Luis Luna Villa

    }
    
// console.log(fullName('Luis','Luna','Villa'))    

// Tipo de funcion

const contar = ( heroes:string [] ) => {
    // console.log(heroes)
    return heroes.length;
  }
  const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  console.log(contar(superHeroes));

})()
