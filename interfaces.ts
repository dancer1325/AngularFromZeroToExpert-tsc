//No existe en js

function enviarMision(xmen: any) {
  //En el momento en el que estoy xmen.: como no se ha definido nombre para el objeto "xmen", no me da ninguna sugerencia
  console.log("Enviando a: " + xmen.nombre);
}

let Wolverine = {
  nombre: "wolverine",
  poder: "Regeneracion",
};
enviarMision(Wolverine);

//Si cambio el atributo para que no se llame nombre, dará un nanDefined cuando se invoque a la función enviarMision.
let Wolverine2 = {
  nombreXmen: "wolverine",
  poder: "Regeneracion",
};
enviarMision(Wolverine2);

// Specifying the mandatory and used type in the argument
function enviarMisionSpecifingThePropertyInTheArgument(xmen: {
  nombre: string;
}) {
  //En el momento en el que estoy xmen.: como no se ha definido nombre para el objeto "xmen", no me da ninguna sugerencia
  console.log("Enviando a: " + xmen.nombre);
}
enviarMisionSpecifingThePropertyInTheArgument(Wolverine);

// Defining an interface
interface Xmen {
  name: string;
  age: number;
}

// Function's argument
function sendMissionWithAnInterface(xmen: Xmen) {
  // console.log("Enviando a: " + xmen.aaa); // Get an error in code time
  console.log("Enviando a: " + xmen.name);
}
