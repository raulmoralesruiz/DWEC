const mazoJug = document.getElementById('img_mazo_jug');
const nuevaCarta = document.getElementById('img_nueva_carta_jug');

const valor_carta_especial = 0.5;


// Se define un array con los palos de la baraja
let palos = ["Espadas", "Bastos", "Copas", "Oros"];

// Se define un array con el número de cartas de la baraja
let numC = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// Se define el mazo de cartas
let mazo = [];

// Se define el historial de cartas del jugador
let historial_jugador = [];



// Crear array con todas las cartas -> 40 (10 de cada palo).
// Por cada palo...
for (let p = 0; p < palos.length; p++) {

    // Por cada número de carta
    for (let n = 0; n < numC.length; n++) {
        //crear carta en el mazo
        mazo.push(numC[n] + palos[p] + ".jpg");
    }

}


let contador_jugadas = 0;
let limite_jugadas = 5;
mazoJug.addEventListener('click', (e) => {
    if (contador_jugadas < limite_jugadas) {
        cartaRandom();
        contador_jugadas += 1;
    } else {
        alert("Se ha alcanzado el máximo de jugadas posibles.");
    }
});



// Función que calcula un número aleatorio, pasando como parámetro un valor mínimo y máximo
function numRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min); 
}


// Función que muestra una carta aletoria del mazo
function cartaRandom() {

    // Se comprueba si hay cartas en el mazo
    if (mazo.length <= 0) {
        alert("No quedan cartas en el mazo.")
    } else {

        // Obtenemos la posición de la carta en el array (mazo)
        let posCartaEnMazo = numRandom(0, (mazo.length - 1));

        // Sacamos la carta del mazo (array)
        // splice -> primer valor, indice a eliminar. segundo valor, cantidad
        let carta = mazo.splice(posCartaEnMazo, 1);
    
        // Mostramos la carta en el sitio indicado -> carta actual del jugador
        nuevaCarta.src = `imagenes/${carta}`;

        // Se agrega la carta al array historial del jugador
        historial_jugador.push(carta);

        // Se inserta la carta en el historial del jugador
        document.getElementById(`img_cartajug_${historial_jugador.length}`).src = `imagenes/${carta}`;
    }

    console.log(historial_jugador);
}

