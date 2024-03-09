(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
   const numero: number = 123;
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum nivelDeFuerza {
      Acuaman  = 0,
      Batman   = 1,
      Flash    = 5,
      superman = 100
    }

    //Es conveniente indicar el tipo de cada elemnto con el valor enum.
    const fuerzaFlash    : nivelDeFuerza = nivelDeFuerza.Flash;
    const fuerzaSuperman : nivelDeFuerza = nivelDeFuerza.superman;
    const fuerzaBatman   : nivelDeFuerza = nivelDeFuerza.Batman;
    const fuerzaAcuaman  : nivelDeFuerza = nivelDeFuerza.Acuaman;
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  