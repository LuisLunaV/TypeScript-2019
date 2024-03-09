(()=>{
    let superHero: {name: string, age: number, powers: string[], getName?: ()=> string } = {

        name:'spiderman',
        age:22,
        powers: ['sentido aracnido', 'super fuerza']

        }

        superHero = {
            name:'Ironman',
            age:42,
            powers: ['mucho dinero', 'super cerebro'],
            getName(){
                return this.name;
            }
                
        }
    
        console.log(superHero)
})()