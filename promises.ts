//Las promesas es un tema de ES6, que le faltaba al JS. Nos da la posibilidad de ejecutar algún código, tarea o function cuando una tarea asíncrona es terminada.
//resolve: Function que vamos a utilizar si todo el código o promesa funciona bien
//reject: Function que vamos a utilizar si la función o promesa devuelve algun error
let prom1 = new Promise<void>(function (resolve, reject) {
  // If resolve hasn't got arguments --> Necessary to add void as returned type of the promise
  // It doesn't work in previous versions to ES6
  //Como queremos una función asíncrona, vamos a hacer un setTimeOut
  setTimeout(() => {
    console.log("Promesa terminada");

    //Si nuestro proceso asíncrona resuelve de una manera correcta
    resolve(); // Without this sentence, then with the resolve listener won't heard
    //SI nuestro proceso asincrona termina mal
    //reject();
  }, 1500);
});

//Como las promesas son asíncronas, aunque aparezca "Paso1" y "Paso2" después que la promesa, aparecerá después en la consola del navegador
console.log("Paso1");

//Para hacer la llamda a la promesas. Cuando se ejecuta la promesa, el then, recibe 2 parámetros; que son la resolve y reject
prom1
  .then(
    function () {
      // Executed if the promise is resolved
      console.log("Ejecutarme cuando se termine bien");
    },
    function () {
      // Executed if the promise is rejected
      console.error("Ejecutarme si todo sale mal");
    }
  )
  .catch((err) => console.log(err));

console.log("Paso2");

//Si quisiéramos que salga la función reject, tendríamos que  que descomentarla de la promesa
