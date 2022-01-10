class Avenger {
  nombre: string; // Not necessary to indicate the type since it's inferred by typescript
  team: string;
  realName: string | undefined;
  canRide: boolean = false;
  // wonStrights: number; // Error. Neither initialized nor assigned to the constructor
  wonStrights!: number;

  constructor(nombre: string, team: string) {
    this.nombre = nombre;
    this.team = team;
  }

  // Not possible to declare 2 constructors
  /* constructor(nombre: string) {
    this.nombre = nombre;
   }*/
}

// const antman: Avenger = new Avenger(); // Necessary to indicate the constructor with the required arguments
const antman: Avenger = new Avenger("Alfredo", "Handsome");
console.log(antman);

class PublicAvenger {
  // Without declaring the properties in the class, and leaving the responsability to the constructor
  constructor(public nombre: string) {}
}

const spiderman = new PublicAvenger("Spiderman");
console.log(spiderman);
