// botones. reiniciar y plantarse
const reiniciar = document.getElementById('bot_reiniciar');
const plantarse = document.getElementById('bot_plantarse');


// funcionamiento del botón reiniciar
reiniciar.addEventListener('click', (e) => {
    location.reload();
});


// constantes para las secciones: jugador, banca y ganador
const divMazo = document.getElementById('mazo');
const mazoCentro = document.getElementById('img_mazo_jug');

const cartasJugador = document.getElementById("jugador");
const div_puntos_jugador = document.getElementById('valor_puntos_jugador');

const cartasBanca = document.getElementById("banca");
const div_puntos_banca = document.getElementById('valor_puntos_banca');

const panel = document.getElementById('panel');


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

mazoCentro.addEventListener('click', (e) => {

    // se agrega borde al tablero del jugador (mientras el usuario juega)
    // tablero_jugador.classList.add('jugador_activa');

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
            divMazo.classList.add("mazo_oculto");
            divMazo.classList.remove("mazo_default");

            divMazo.classList.add("ganador_banca");
            divMazo.textContent = `Ganador: BANCA`;

            // ganador.classList.add('ganadorBanca');
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

        // Se agrega la carta al array historial del jugador
        historial_jugador.push(carta);

        // Se inserta la carta en el historial del jugador. (Creación e inserción de imagen)
        let nuevaImagen = document.createElement("img");
        nuevaImagen.src = `imagenes/${carta}`;
        nuevaImagen.setAttribute("class", "img_cartas_jug");
        cartasJugador.appendChild(nuevaImagen);

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

        // Se muestran los puntos del jugador en la posición correspondiente (div_puntos_jugador)
        div_puntos_jugador.textContent = `${puntos_jugador} puntos`;
    }

    // Si el jugador obtiene la puntuación ideal, la banca comienza a jugar.
    if (puntos_jugador == 7.5) {
        plantarse.click();
    }
}




// Se define el historial de cartas de la banca
let historial_banca = [];
let puntos_banca = 0;


plantarse.addEventListener('click', jugada = (e) => {

    // se comprueba si el usuario ha jugado al menos una vez
    if (contador_jugadas == 0) {
        alert("El jugador no puede plantarse sin jugar.");
    } else {

        // si el juego no ha terminado...
        if (juegoFinalizado == false) {

            // se cambia la imagen del mazo jugador. (para que no aparezca pedir carta)
            mazoCentro.src = `imagenes/trasera.jpg`;

            // se elimina borde del tablero del jugador (su turno ha finalizado)
            // tablero_jugador.classList.remove('jugador_activa');

            // se agrega borde al tablero de la banca (mientras la banca juega)
            // tablero_banca.classList.add('banca_activa');


            //deshabilitar funcionalidad mazoCentro. (no se deben dar más cartas al jugador tras plantarse)
            contador_jugadas = limite_jugadas;

            // Se comprueba si hay cartas en el mazo
            if (mazo.length <= 0) {
                alert("No quedan cartas en el mazo.")
            } else {

                // Obtenemos la posición de la carta en el array (mazo)
                let posCartaEnMazo = numRandom(0, (mazo.length - 1));

                // Sacamos la carta del mazo (array)
                // splice -> primer valor, indice a eliminar. Segundo valor, cantidad
                let carta = mazo.splice(posCartaEnMazo, 1);

                // Se agrega la carta al array historial de la banca
                historial_banca.push(carta);

                // Se inserta la carta en el historial de la banca. (Creación e inserción de imagen)
                // document.getElementById(`img_cartaban_${historial_banca.length}`).src = `imagenes/${carta}`;
                let nuevaImagen = document.createElement("img");
                nuevaImagen.src = `imagenes/${carta}`;
                nuevaImagen.setAttribute("class", "img_cartas_ban");
                cartasBanca.appendChild(nuevaImagen);


                // Se extrae el digito de la carta. (valores entre 1 y 10)
                let digitoCarta = parseInt(carta);
                let valorCarta = 0;

                // Se guarda el valor de la carta
                if (digitoCarta >= 8) {
                    valorCarta = 0.5;
                } else {
                    valorCarta = digitoCarta;
                }

                // Se incrementa la puntuación de la banca
                puntos_banca += valorCarta;
                div_puntos_banca.textContent = `${puntos_banca} puntos`;


                // se reparten todas las cartas necesarias para la banca.
                if (puntos_banca < puntos_jugador) {
                    // delay de 1 segundo tras mostrar cada carta de la banca
                    setTimeout(jugada, 1000);
                }

                // se comprueba quién es el ganador
                else if ((puntos_banca >= puntos_jugador) && (puntos_banca <= 7.5)) {

                    // si la banca gana, se termina el juego y se muestra por pantalla
                    divMazo.classList.add("mazo_oculto");
                    divMazo.classList.remove("mazo_default");

                    divMazo.classList.add("ganador_banca");
                    divMazo.textContent = `Ganador: BANCA`;

                    juegoFinalizado = true;
                } else {

                    // si el jugador gana, se termina el juego y se muestra por pantalla
                    divMazo.classList.add("mazo_oculto");
                    divMazo.classList.remove("mazo_default");

                    divMazo.classList.add("ganador_jugador");
                    divMazo.textContent = `Ganador: JUGADOR`;

                    juegoFinalizado = true;
                }
            }

            // si el juego ya ha terminado, se muestra el aviso
        } else {
            alert("El juego ya ha finalizado.");
        }
    }

});