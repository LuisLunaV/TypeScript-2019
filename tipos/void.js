"use strict";
(() => {
    function saludo() {
        console.log('hola mundo');
    }
    const vacio = () => {
        return;
    };
    saludo();
    vacio();
})();
