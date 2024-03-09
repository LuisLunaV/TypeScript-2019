(()=>{
    function saludo():void{
        console.log('hola mundo')
    }

    const vacio =(): void =>{
        return;
    }

    saludo();
    vacio();
})()