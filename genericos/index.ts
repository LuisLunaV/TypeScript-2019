import {genericaUno, genericaDos, genericaTres } from './functions/generics';
import { Hero, Villan } from './interface/interface';

const spiderman:Hero = {
  name:'spiderman',
  realName:'peter parker'
}

const goblin: Villan = {
  name: 'Green goblin',
  dangerLevel: 80,
}

const uno = genericaUno<Hero>( spiderman ).realName;
const dos = genericaDos<Villan>( goblin ).name;

interface Categoria{
  Categoria_Id: number,
  Categoria_Descripcion: string
}


// forma numero UNO
// const tres = genericaTres( ).then( resp =>{
//   resp.forEach( ({ Categoria_Id, Categoria_Descripcion }: categorias ) => {
//     console.log(Categoria_Id);
//     console.log(Categoria_Descripcion)
//   });
// });


const categoria = async() =>{
 const tres = await genericaTres();
 tres.forEach( ( index: Categoria ) => {
    console.log(index.Categoria_Descripcion)
   });
//  tres.forEach( ( index: any ) => {
//   console.log(index)
//  });
}

categoria();
// console.log(uno);
// console.log(dos);
// console.log(tres);
