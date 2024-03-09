
// Objetos
type propiedades = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?: ()=> void
}
const batimovil: propiedades = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: propiedades = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type villanos = {
  nombre:string,
  edad: number| undefined,
  mutante:boolean
}

const villanos: villanos[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type xMen = {
  poder: string,
  estatura: number
}

type hermandad ={
  lider: boolean,
  miembros: string[]
}

const charles: xMen = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis: hermandad = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: ( xMen| hermandad );

mystique = charles;
mystique = apocalipsis;
