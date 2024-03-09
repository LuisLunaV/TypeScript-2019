(()=>{
    type hero = {
        name: string,
        age: number,
        powers: string[],
        getName?: ()=> string
    }

    let Ironman: hero = {
        name:'Tony',
        age: 42,
        powers: ['Mucho dinero','super cerebro'],
        getName(){
            return this.name
        }
    }

    let Superman: (string | number | hero) = {
        name: 'Clark kent',
        age: 35,
        powers: ['Super fuerza','Vuelo']
    }
    console.log(Ironman)
    console.log(Superman)


    // Multi type's
    let myCustomVariables: ( string | number | hero);

    myCustomVariables = 'Hola mundos';
    console.log(myCustomVariables);

    myCustomVariables = 32;
    console.log(myCustomVariables);

    myCustomVariables = {
        name:'Batman',
        age: 43,
        powers: ['Ninguno']
    }
    console.log(myCustomVariables);



})()