/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function () {
  // Definimos los palos y los valores posibles
  const palos = ["♠", "♣", "♦", "♥"];
  const numerosYLetras = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  // Función para cambiar los valores numéricos a letras (A, J, Q, K)
  function changeValue(numero) {
    switch (numero) {
      case 1:
        return "A";
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      default:
        return numero;
    }
  }

  // Función para crear la carta
  function crearCarta(palo, numero) {
    const carta = document.createElement("div");
    carta.classList.add("carta", palos[palo] === "♥" || palos[palo] === "♦" ? "red" : "black");

    const paloArriba = document.createElement("div");
    paloArriba.classList.add("paloArriba", "text-start", "m-0", "p-0");
    paloArriba.textContent = palos[palo];
    paloArriba.style.fontSize = "70px";

    const numeroLetra = document.createElement("div");
    numeroLetra.classList.add("numeroLetra", "text-center");
    numeroLetra.textContent = changeValue(numerosYLetras[numero]);
    numeroLetra.style.fontSize = "120px";

    const paloAbajo = document.createElement("div");
    paloAbajo.classList.add("paloAbajo", "text-end", "m-0");
    paloAbajo.textContent = palos[palo];
    paloAbajo.style.fontSize = "70px";

    carta.appendChild(paloArriba);
    carta.appendChild(numeroLetra);
    carta.appendChild(paloAbajo);

    return carta;
  }

  // Función para generar una carta aleatoria
  function generarCartaAleatoria() {
    const paloAleatorio = Math.floor(Math.random() * palos.length);
    const numeroAleatorio = Math.floor(Math.random() * numerosYLetras.length);

    const carta = crearCarta(paloAleatorio, numeroAleatorio);

    const contenedor = document.getElementById("cartasMano");
    contenedor.appendChild(carta);
  }

  generarCartaAleatoria();
};
