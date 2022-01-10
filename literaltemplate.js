"use strict";
(function () {
    var NOMBRE = "Alfredo";
    var APELLIDO = "Toledano";
    var TOGETHER = " Name ".concat(NOMBRE, " \n     and lastname ").concat(APELLIDO, "\n     is ").concat(20 + 10, "\n     ").concat(whereDoYouLive()); // Literal template adding: A) break lines, B) blank spaces
    console.log(TOGETHER);
    console.log(typeof TOGETHER);
    function whereDoYouLive() {
        return " currently living in Madrid";
    }
})();
