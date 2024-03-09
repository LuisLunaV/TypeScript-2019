export const genericaUno  = <T> ( arg: T): T =>{
  return arg;
};

export const genericaDos  = <T> ( arg: T): T =>{
  return arg;
};


const url:string = 'https://backend-pizzeria-remolo-production.up.railway.app/api/categorias';

export const genericaTres  = async( ): Promise<any> =>{
  const resp = await fetch( url );
  const { categoria } = await resp.json();

  return  categoria ;
};


