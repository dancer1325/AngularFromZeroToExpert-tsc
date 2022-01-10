"use strict";
(function () {
    // All arguments mandatories
    function allMandatoriesActivate(who, object, time) {
        console.log(`${who} activated ${object} at ${time}`);
    }
    allMandatoriesActivate("Alfredo", "alarm", "now"); // Identification based on the position
    // Some arguments mandatories
    function someMandatoriesActivate(who, object, time = "afterwards") {
        console.log(`${who} activated ${object} at ${time}`);
    }
    someMandatoriesActivate("Alfredo", "now");
    // Some arguments optional
    function someOptionalActivate(who, 
    // object?: string = "vehicle", // Optional parameter can not be initialized
    object, 
    // time: string // Mandatory parameter can't appear after an optional one
    time = "now") {
        console.log(`${who} activated ${object} at ${time}`);
    }
    someOptionalActivate("Alfredo", "now");
    const UPPERFUNCTION = (a) => a.toUpperCase(); // Arrow function
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
