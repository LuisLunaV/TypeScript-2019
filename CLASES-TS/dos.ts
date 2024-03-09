// Herencia de clases: Crea una clase hija que herede de la clase principal y 
// añada algunas funcionalidades adicionales. Practica cómo se utiliza la palabra
// clave "extends" para establecer la relación de herencia.
interface Ialumno{
    name:     string;
    lastName: string;
    age:      number;
    gender:   string;
    tutor:    string;
}

class School{

    private alumnos: Array<Ialumno> = [];

    addAlumno( info: Ialumno ){
        this.alumnos.push( info );
    }

    getAlumnos(){
        console.log(this.alumnos)
    }

    searchAlumno( name:string ){
        const alumnoFiltrado = this.alumnos.filter(alumno =>{
           if( name === alumno.name){
            return alumno
           }
        })

        return alumnoFiltrado;
    }

    deleteAlumno( name:string ){

        this.alumnos = this.alumnos.filter( alumno =>{
            return name !== alumno.name;
        });

    }
}


class Person{
    
    protected name:     string;
    protected lastName: string;
    protected age:      number;
    protected gender:   string;

    constructor( name: string, lastName:string, age:number, gender:'M'|'F'){
        this.name     = name,
        this.lastName = lastName,
        this.age      = age,
        this.gender   = gender
    }
}

class Alumno extends Person{
    private tutor: string;
    constructor( name: string, lastName:string, age:number, gender:'M'|'F', tutor:string ){
        super( name, lastName, age, gender )
        this.tutor = tutor;
    }

   public createAlumno( ){
    return{
        name:this.name,  
        lastName:this.lastName, 
        age:this.age,
        gender:this.gender, 
        tutor:this.tutor,     
    }
    }
}
const school = new School();

const alumnoUno =  new Alumno('Luis','Luna',11,'M','Luis');
const alumnoDos =  new Alumno('Laura','Lopez',11,'F','Elena');
const alumnoTres = new Alumno('Ana','Hernandez',11,'F','Maria');

school.addAlumno( alumnoUno.createAlumno());
school.addAlumno( alumnoDos.createAlumno());
school.addAlumno( alumnoTres.createAlumno());

// school.deleteAlumno('Luis');

console.log('----------------------')
console.log( school.searchAlumno('Ana'));
console.log('----------------------')
console.log( school.getAlumnos());
