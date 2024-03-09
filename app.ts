const a: number = 10;
const b: string = 'texto';
const trueOrFalse: boolean = true || false;
const opciones: object ={
    perro: 'ramon',
    gato: 'pirulais'
}

console.log( trueOrFalse );

const funcion =( numero: number )=>{
    return 5 + numero;
};

funcion(5); //10
// funcion('hola'); No se puede asignar un argumento de tipo "string" a un "number"