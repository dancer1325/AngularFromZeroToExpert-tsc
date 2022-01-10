//Cuando queremos extrar la información de los objetos, para utilizarlo con variables independientes
let avenger = {
  nombre: "Steve",
  clave: "Capitan America",
  poder: "Droga",
};
// let nombre:string = avenger.nombre;
// let clave:string = avenger.clave;
// let poder:string = avenger.poder;
//Con la deestructuración de objetos, podemos hacer todo lo anterior, en 1 sóla línea de codigo
var { nombre, clave, poder } = avenger;
console.log(nombre + clave + poder);

//No importa el orden con el que se realice la deseestructuración, siempre y cuando aparezcan los nombres de las propiedades.

//En una deseestructuración, poner ":" sirve para poner un alias.TypeScritp ya va a saber dependiendo del objeto o tipo en el que estés, el tipo automáticamente
let avengerTwo = {
  nameWeird: "Steve",
  key: "Capitan America",
  poder: "Droga",
};
let { poder: string, nameWeird, key } = avengerTwo; // let variable can't be redeclared
// var { poder: string, key, name } = avengerTwo; // name is a internal variable for Typescript
// console.log(name, clave, string);
// var { poder: string, key } = avengerTwo;
console.log(clave, string);

//Escribiendo un "." después del objeto, serán todos los métodos que existen para dicho tipo

//Para la deseestructuración de los arrays, es secuencial. Mientras que en la deseestructuración de los objetos, da igual el orden
let avengers2: string[] = ["Thro", "Steve", "Tony"];
let [thor, capi, ironman] = avengers2;
console.log(thor, capi, ironman);
//Por lo tanto, si quisiéramos sacar el último, los otros, tendríamos que ponerlos vacíos
let [, , jolin] = avengers2;
console.log(jolin);

//Se puede hacer la deseestructuración de arrays anidados, objetos anidados, ...
