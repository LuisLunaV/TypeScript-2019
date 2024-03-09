"use strict";
// Funcion anonima auto invocada
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
})();
