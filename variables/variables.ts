// Anonymous auto-invoked function
(function () {
  var mensaje = "Hola1";
  var mensaje = "Hola2"; // var variables can be redefined

  let mensajeLet = "mensajeLet 1";
  //let mensajeLet = "mensajeLet 1"; // let can not be redefined

  const MENSAJECONST = "mensajeConst";
  // mensajeConst = 'mensajeConst2'; // const not possible to redefine

  let number = 123; // If the tpe isn't specified --> The type is inferred

  //number = 'Not possible redefine it, switching to another type of variable' // Not possible to redefine to another type of variable

  let spiderman = {
    nombre: "Peter",
    edad: 30,
  };

  spiderman = {
    nombre: "Batman",
    edad: 32,
    //poder: "Trepar paredes", // Not possible to refine the object, adding a new property
  };

  let anything: string | number; // Several types can be specified for a variable
  anything = MENSAJECONST;
  console.log(anything);
  anything = number;
  console.log(anything);

  if (true) {
    var mensaje = "Hola3";
    let mensajeLet = "mensajeLet 2";

    console.log(mensaje);
    console.log(mensajeLet); // Specific of the scope
  }

  console.log(mensaje); // var is defined at global level
  console.log(mensajeLet);
  console.log(MENSAJECONST);
  console.log(typeof number); // Infering the type
})();
