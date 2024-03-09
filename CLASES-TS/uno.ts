// Crear una clase simple: Crea una clase en TypeScript con algunos campos y métodos. 
// Practica cómo se definen los tipos de datos para los campos y los parámetros de los métodos.
class Persona{
    
    private nombre:string;
    private apellidos: string;
    private edad: number
    private sexo: string;
    protected empleado: string;

   public constructor( nombre:string, apellidos:string, edad:number, sexo: 'M'|'F' ){
        this.nombre    = nombre;
        this.apellidos = apellidos;
        this.edad      = edad;
        this.sexo      = sexo;
        this.empleado  = 'e012976';
    }


   public getInformation(){
       return {
        nombre:    this.nombre,
        apellidos: this.apellidos,
        edad:      this.edad,
        sexo:      this.sexo
    }
    };    
}
const persona = new Persona('Luis', 'Luna', 31, 'M');

const information = persona.getInformation();

console.log(information);