(function () {
  // All arguments mandatories
  function allMandatoriesActivate(who: string, object: string, time: string) {
    console.log(`${who} activated ${object} at ${time}`);
  }

  allMandatoriesActivate("Alfredo", "alarm", "now"); // Identification based on the position

  // Some arguments mandatories
  function someMandatoriesActivate(
    who: string,
    object: string,
    time: string = "afterwards"
  ) {
    console.log(`${who} activated ${object} at ${time}`);
  }

  someMandatoriesActivate("Alfredo", "now");

  // Some arguments optional
  function someOptionalActivate(
    who: string,
    // object?: string = "vehicle", // Optional parameter can not be initialized
    object?: string,
    // time: string // Mandatory parameter can't appear after an optional one
    time: string = "now"
  ) {
    console.log(`${who} activated ${object} at ${time}`);
  }

  someOptionalActivate("Alfredo", "now");

  const UPPERFUNCTION = (a: string) => a.toUpperCase(); // Arrow function

  const HULKWITHFUNCTION = {
    nombre: "Hulk",
    smash() {
      setTimeout(function () {
        // console.log(`${this.nombre} smash!!!`); // It doesn't work, because this is modified in a normal function
      }, 1000);
    },
  };

  const HULKWITHARROWFUNCTION = {
    nombre: "Hulk",
    smash() {
      setTimeout(() => {
        console.log(`${this.nombre} smash!!!`); // this is not modified into an arrow function
      }, 1000);
    },
  };
})();
