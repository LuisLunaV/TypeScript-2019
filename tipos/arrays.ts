(()=>{

    const array:(string | number | boolean)[] = [1,2,'hola',3,true];
    const numeros: number[] = [1,2,3,4,5];
    const palabras: string[] = ['Hola','mundo',':)']

    array.forEach( info =>{
        console.log(info)
    });

    // numeros.forEach( numero => {
    //     console.log(numero)
    // });

    // palabras.forEach( palabras => {
    //     console.log(palabras)
    // });
})()