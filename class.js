"use strict";
class Avenger {
    constructor(nombre, team) {
        this.canRide = false;
        this.nombre = nombre;
        this.team = team;
    }
}
// const antman: Avenger = new Avenger(); // Necessary to indicate the constructor with the required arguments
const antman = new Avenger("Alfredo", "Handsome");
console.log(antman);
class PublicAvenger {
    // Without declaring the properties in the class, and leaving the responsability to the constructor
    constructor(nombre) {
        this.nombre = nombre;
    }
}
const spiderman = new PublicAvenger("Spiderman");
console.log(spiderman);
