// botones. reiniciar y plantarse
const reiniciar = document.getElementById('bot_reiniciar');
const plantarse = document.getElementById('bot_plantarse');


// funcionamiento del botón reiniciar
reiniciar.addEventListener('click', (e) => {
    location.reload();
});


// constantes para las secciones: jugador, banca y ganador
const tablero_jugador = document.getElementById('jugador');
const mazoJug = document.getElementById('img_mazo_jug');
const nuevaCartaJug = document.getElementById('img_nueva_carta_jug');
const div_puntos_jugador = document.getElementById('valor_puntos_jugador');

const tablero_banca = document.getElementById('banca');
const mazoBan = document.getElementById('img_mazo_ban');
const nuevaCartaBan = document.getElementById('img_nueva_carta_ban');
const div_puntos_banca = document.getElementById('valor_puntos_banca');

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

// Variable que indicará el estado del juego (finalizado o no)
let juegoFinalizado = false;


// Crear array con todas las cartas -> 40 (10 de cada palo).
// Por cada palo...
for (let p = 0; p < palos.length; p++) {

    // Por cada número de carta
    for (let n = 0; n < numC.length; n++) {
        //crear carta en el mazo
        mazo.push(numC[n] + palos[p] + ".jpg");
    }

}

// Se define un máximo de jugadas y contador para el jugador
let contador_jugadas = 0;
let limite_jugadas = 7;

mazoJug.addEventListener('click', (e) => {

    // se agrega borde al tablero del jugador (mientras el usuario juega)
    tablero_jugador.classList.add('jugador_activa');
    
    // se comprueba si el juego ha terminado
    if (juegoFinalizado == false) {

        // si no ha terminado el turno del jugador.
        if (contador_jugadas < limite_jugadas) {
            cartaRandom();
            contador_jugadas += 1;
        } else {
            alert("Se ha alcanzado el máximo de jugadas posibles.");
        }
    
        // si el jugador se pasa del límite de puntos
        if (puntos_jugador > 7.5) {

            // gana la banca y termina el juego
            ganador.textContent = `Ganador: BANCA`;
            ganador.classList.add('ganadorBanca');
            juegoFinalizado = true;
        }

    } else {
        // si el juego ha finalizado, se muestra el aviso.
        alert("El juego ya ha finalizado.");
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




// Se define el historial de cartas de la banca
let historial_banca = [];
let puntos_banca = 0;


plantarse.addEventListener('click', (e) => {

    // se elimina borde del tablero del jugador (su turno ha finalizado)
    tablero_jugador.classList.remove('jugador_activa');

    // se agrega borde al tablero de la banca (mientras la banca juega)
    tablero_banca.classList.add('banca_activa');


    // se comprueba si el usuario ha jugado al menos una vez
    if (contador_jugadas == 0) {
        alert("El jugador no puede plantarse sin jugar.");
    } else {

        // si el juego no ha terminado...
        if (juegoFinalizado == false) {
            
            //deshabilitar funcionalidad mazoJugador. (no se deben dar más cartas al jugador tras plantarse)
            contador_jugadas = limite_jugadas;
    
            // Se comprueba si hay cartas en el mazo
            if (mazo.length <= 0) {
                alert("No quedan cartas en el mazo.")
            } else {
    
                // se reparten todas las cartas necesarias para la banca
                while (puntos_banca <= puntos_jugador) {
    
                    // Obtenemos la posición de la carta en el array (mazo)
                    let posCartaEnMazo = numRandom(0, (mazo.length - 1));
    
                    // Sacamos la carta del mazo (array)
                    // splice -> primer valor, indice a eliminar. Segundo valor, cantidad
                    let carta = mazo.splice(posCartaEnMazo, 1);
    
                    // Mostramos la carta en el sitio indicado -> carta actual del jugador
                    nuevaCartaBan.src = `imagenes/${carta}`;
    
                    // Se agrega la carta al array historial del jugador
                    historial_banca.push(carta);
    
                    // Se inserta la carta en el historial del jugador
                    document.getElementById(`img_cartaban_${historial_banca.length}`).src = `imagenes/${carta}`;
    
    
                    // Se extrae el digito de la carta. (valores entre 1 y 10)
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
    
                // if (puntos_banca > 7.5) {
                //     ganador.textContent = `Ganador: JUGADOR`;
                // } else {
                //     ganador.textContent = `Ganador: BANCA`;
                // }
    

                // se comprueba quién es el ganador
                if ((puntos_banca >= puntos_jugador) && (puntos_banca <= 7.5)) {
                    
                    // si la banca gana, se termina el juego y se muestra por pantalla
                    ganador.textContent = `Ganador: BANCA`;
                    ganador.classList.add('ganadorBanca');
                    juegoFinalizado = true;
                } else {

                    // si el jugador gana, se termina el juego y se muestra por pantalla
                    ganador.textContent = `Ganador: JUGADOR`;
                    ganador.classList.add('ganadorJugador');
                    juegoFinalizado = true;
                }
            }
    
        // si el juego ya ha terminado, se muestra el aviso
        } else {
            alert("El juego ya ha finalizado.");
        }
    }

});



/* Apuntes.
Si el jugador se pasa (y pierde), el juego debe finalizar.
Por lo tanto, el botón de plantarse no debe funcionar.

Si el jugador se planta, y la banca ya ha ganado, el juego debe finalizar.
Por lo tanto, el botón de plantarse no debe funcionar.
*/