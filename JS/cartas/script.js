const reiniciar = document.getElementById('bot_reiniciar');

reiniciar.addEventListener('click', (e) => {
    location.reload();
});


const mazoJug = document.getElementById('img_mazo_jug');
const nuevaCartaJug = document.getElementById('img_nueva_carta_jug');
const div_puntos_jugador = document.getElementById('valor_puntos_jugador');
let mazoJugActivo = true;

const mazoBan = document.getElementById('img_mazo_ban');
const nuevaCartaBan = document.getElementById('img_nueva_carta_ban');
const div_puntos_banca = document.getElementById('valor_puntos_banca');


const plantarse = document.getElementById('bot_plantarse');
const ganador = document.getElementById('ganador');



// Se define un array con los palos de la baraja
let palos = ["Espadas", "Bastos", "Copas", "Oros"];

// Se define un array con el número de cartas de la baraja
let numC = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// Se define el mazo de cartas
let mazo = [];

// Se define el historial de cartas del jugador
let historial_jugador = [];
let puntos_jugador = 0;


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
let limite_jugadas = 7;

mazoJug.addEventListener('click', (e) => {
    if (contador_jugadas < limite_jugadas) {
        cartaRandom();
        contador_jugadas += 1;
    } else {
        alert("Se ha alcanzado el máximo de jugadas posibles.");
    }

    if (puntos_jugador > 7.5) {
        ganador.textContent = `Ganador: BANCA`;
        contador_jugadas = 7;
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
        nuevaCartaJug.src = `imagenes/${carta}`;

        // Se agrega la carta al array historial del jugador
        historial_jugador.push(carta);

        // Se inserta la carta en el historial del jugador
        document.getElementById(`img_cartajug_${historial_jugador.length}`).src = `imagenes/${carta}`;


        // Se extrae el digito de la carta
        let digitoCarta = parseInt(carta);
        let valorCarta = 0;

        // Se guarda el valor de la carta
        if (digitoCarta >= 8) {
            valorCarta = 0.5;
        } else {
            valorCarta = digitoCarta;
        }

        // Se incrementa la puntuación del jugador
        puntos_jugador += valorCarta;
        div_puntos_jugador.textContent = `${puntos_jugador} puntos`;
    }
}




// Se define el historial de cartas del jugador
let historial_banca = [];
let puntos_banca = 0;


plantarse.addEventListener('click', (e) => {
    // alert("El jugador se ha plantado");

    
    //deshabilitar funcionalidad mazoJugador. (no se deben dar más cartas al jugador tras plantarse)
        // mazoJug.addEventListener('click', (e) => {
        // });

        // mazoJug.removeEventListener('click', (e), true);


    // Se comprueba si hay cartas en el mazo
    if (mazo.length <= 0) {
        alert("No quedan cartas en el mazo.")
    } else {

        while (puntos_banca <= puntos_jugador) {

            // Obtenemos la posición de la carta en el array (mazo)
            let posCartaEnMazo = numRandom(0, (mazo.length - 1));

            // Sacamos la carta del mazo (array)
            // splice -> primer valor, indice a eliminar. segundo valor, cantidad
            let carta = mazo.splice(posCartaEnMazo, 1);

            // Mostramos la carta en el sitio indicado -> carta actual del jugador
            nuevaCartaBan.src = `imagenes/${carta}`;

            // Se agrega la carta al array historial del jugador
            historial_banca.push(carta);

            // Se inserta la carta en el historial del jugador
            document.getElementById(`img_cartaban_${historial_banca.length}`).src = `imagenes/${carta}`;


            // Se extrae el digito de la carta
            let digitoCarta = parseInt(carta);
            let valorCarta = 0;

            // Se guarda el valor de la carta
            if (digitoCarta >= 8) {
                valorCarta = 0.5;
            } else {
                valorCarta = digitoCarta;
            }

            // Se incrementa la puntuación del jugador
            puntos_banca += valorCarta;
            div_puntos_banca.textContent = `${puntos_banca} puntos`;
        }

        if (puntos_banca > 7.5) {
            ganador.textContent = `Ganador: JUGADOR`;
        } else {
            ganador.textContent = `Ganador: BANCA`;
        }

    }

});