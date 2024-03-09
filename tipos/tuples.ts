(()=>{
    const info: [string, number] = ['Luis', 30];
    
    // info[0] = 30; //error por el tipo de dato
    // info[1] = 'Maria'; //error por el tipo de dato

    info[0] = 'Maria';
    info[1] = 30;

    const info2 : [string, number, boolean] = ['Luis', 30, true];
    
})()