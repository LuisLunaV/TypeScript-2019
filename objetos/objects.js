"use strict";
(() => {
    let superHero = {
        name: 'spiderman',
        age: 22,
        powers: ['sentido aracnido', 'super fuerza']
    };
    superHero = {
        name: 'Ironman',
        age: 42,
        powers: ['mucho dinero', 'super cerebro'],
        getName() {
            return this.name;
        }
    };
    console.log(superHero);
})();
