"use strict";
// 1)  Declaring and invoking a function
// --> Typescript identifies duplicated code in .js and .ts file
// function saludar( nombre: string ) {  // Indicate explicitely argument's type
// function saludar(nombre) {
//   console.table("Hola " + nombre); // Hola Logan
// }
// const wolverine = {
//   nombre: "Logan",
// };
// saludar(wolverine.nombre);
// 2) Anonymous function Auto-invoked === Base of module pattern of js
// --> Typescript doesn't identify duplicated code in .js and .ts file
(function() {
    function saludar(nombre) {
        console.table("Hola " + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: "Logan",
    };
    saludar(wolverine.nombre);
})();