"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})!!!`;
        }
    }
    // private name: string;
    // private team: string;
    // public realName?: string;
    Avenger.avgAge = 35;
    // const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log( antman )
    // console.log( Avenger.getAvgAge() )
})();
//# sourceMappingURL=basica.js.map