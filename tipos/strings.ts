(()=>{
    const heroeUno: string = "Ironman";
    const heroeDos: string ='Spider-man';
    const heroeTres: string = `Heroe: Namor`;

    console.log(`I'm ${heroeUno}`);
    console.log( heroeDos[10]?.toUpperCase() || 'No esta presente');
})()