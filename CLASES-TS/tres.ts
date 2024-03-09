/***Interfaces: Define una interfaz y utilízala para especificar los tipos de datos de los parámetros 
 * de los métodos de una clase. Practica cómo se utiliza la palabra clave "implements" para hacer que una 
 * clase implemente una interfaz. */
interface Istrategy{
    calculate( a:number, b:number ):number;
}

class Strategy{
    private strategy: Istrategy;

    constructor( strategy: Istrategy ){
        this.strategy = strategy;
    }

    setStrategy( strategy: Istrategy ){
        this.strategy = strategy;
    }

    executeOperattion( a:number, b:number ){
       return this.strategy.calculate(a,b);
    }
}


//Estrategias
class strategyAddition implements Istrategy{
    calculate(a: number, b: number): number {
        return a+b;
    }
};

class strategySubstraction implements Istrategy{
    calculate(a: number, b: number): number {
        return a-b;
    }
}

//Agrgamos la estrategia por default
const strategy = new Strategy( new strategyAddition());

//Cambiamos la estrategia
strategy.setStrategy( new strategySubstraction());


const result      = strategy.executeOperattion(10,20);
console.log(result);

