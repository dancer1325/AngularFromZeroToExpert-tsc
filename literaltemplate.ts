(function () {
  const NOMBRE = "Alfredo";
  const APELLIDO = "Toledano";

  const TOGETHER = ` Name ${NOMBRE} 
     and lastname ${APELLIDO}
     is ${20 + 10}
     ${whereDoYouLive()}`; // Literal template adding: A) break lines, B) blank spaces

  console.log(TOGETHER);
  console.log(typeof TOGETHER);

  function whereDoYouLive() {
    return " currently living in Madrid";
  }
})();
