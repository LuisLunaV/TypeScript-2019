"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const generics_1 = require("./functions/generics");
const spiderman = {
    name: 'spiderman',
    realName: 'peter parker'
};
const goblin = {
    name: 'Green goblin',
    dangerLevel: 80,
};
const uno = (0, generics_1.genericaUno)(spiderman).realName;
const dos = (0, generics_1.genericaDos)(goblin).name;
// forma numero UNO
// const tres = genericaTres( ).then( resp =>{
//   resp.forEach( ({ Categoria_Id, Categoria_Descripcion }: categorias ) => {
//     console.log(Categoria_Id);
//     console.log(Categoria_Descripcion)
//   });
// });
const categoria = () => __awaiter(void 0, void 0, void 0, function* () {
    const tres = yield (0, generics_1.genericaTres)();
    tres.forEach((index) => {
        console.log(index.Categoria_Descripcion);
    });
    //  tres.forEach( ( index: any ) => {
    //   console.log(index)
    //  });
});
categoria();
// console.log(uno);
// console.log(dos);
// console.log(tres);
//# sourceMappingURL=index.js.map