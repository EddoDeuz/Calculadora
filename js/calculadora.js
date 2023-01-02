window.addEventListener("load", () => {
  /* escucha cuando se carga el documento */
  /* se crearon dos constantes y se guardaron los elementos necesarios */
  const display = document.querySelector(".calculator-display");
  const keypadButtons = document.getElementsByClassName("keypad-button");

  /* se creo otra constante para conversir el HTMLCollection a Array */
  const keypadButtonsArray = Array.from(keypadButtons);

  /* Iteramos para el nuevo array de botones */
  keypadButtonsArray.forEach((button) => {
    /* a cada boton se le agrego un listener */
    button.addEventListener("click", () => {
      calculadora(button, display);

      function calculadora(button, display) {
        switch (button.innerHTML) {
          case "C":
            borrar(display);
            break;
          case "=":
            calcular(display);
            break;

          default:
            actualizar(display, button);
            break;
        }
      }
    });
  });
});
function calcular(display) {
  display.innerHTML = eval(
    display.innerHTML
  ); /* Toma el string y lo resuelve y guarda en el innerHTML*/
}
function actualizar(display, button) {
  if (display.innerHTML == 0) {
    display.innerHTML = "";
  }
  display.innerHTML += button.innerHTML;
}

function borrar(display) {
  display.innerHTML = 0;
}
